import React, { useState, useEffect } from 'react';

const VentasComponent = () => {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/ventas-ultimos-10-dias/')
            .then(response => response.json())
            .then(data => {
                const ventasData = data.ventas.map(venta => ({
                    ...venta,
                    mostrarDetalles: false
                }));
                setVentas(ventasData);
            })
            .catch(error => console.log(error));
    }, []);

    const toggleDetalles = (index) => {
        setVentas(prevVentas => {
            const updatedVentas = [...prevVentas];
            updatedVentas[index] = {
                ...updatedVentas[index],
                mostrarDetalles: !updatedVentas[index].mostrarDetalles
            };
            return updatedVentas;
        });
    };

    return (
        <div className="container">
            <div className="row">
                {ventas.map((venta, index) => (
                    <div key={index} className="col-md-6">
                        <div className="card my-3">
                            <div className="card-header">
                                <h5 className="card-title">Venta {index + 1}</h5>
                            </div>
                            <div className="card-body">
                                <p><strong>Total:</strong> {venta.total}</p>
                                <p><strong>Fecha:</strong> {venta.fecha}</p>
                                <p><strong>Dirección de envío:</strong> {venta.direccion_envio}</p>
                                <p><strong>Método de pago:</strong> {venta.metodo_pago}</p>
                                <p><strong>Cliente:</strong> {venta.cliente}</p>
                                <button className="btn btn-primary" onClick={() => toggleDetalles(index)}>
                                    {venta.mostrarDetalles ? 'Ocultar Detalles' : 'Mostrar Detalles'}
                                </button>
                                {venta.mostrarDetalles && (
                                    <div className="detalles mt-3">
                                        <h6>Detalles de Venta</h6>
                                        {venta.detalles.map((detalle, detalleIndex) => (
                                            <div key={detalleIndex} className="border p-2">
                                                <p><strong>Nombre:</strong> {detalle.nombre}</p>
                                                <p><strong>Precio:</strong> {detalle.precio}</p>
                                                <p><strong>Cantidad:</strong> {detalle.cantidad}</p>
                                                <p><strong>Subtotal:</strong> {detalle.subtotal}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VentasComponent;
