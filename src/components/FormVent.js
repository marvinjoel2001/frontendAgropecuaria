import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FormularioVenta() {
    const [productos, setProductos] = useState([]);
    const [formData, setFormData] = useState({
        cliente: '',
        total: 0,
        direccion_envio: '',
        metodo_pago: '',
        usuario: 1,
        detalle_venta: [],
    });

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/productos/');
            setProductos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDetalleVentaChange = (index, field, value) => {
        const detalleVenta = [...formData.detalle_venta];
        detalleVenta[index][field] = value;

        if (field === 'producto') {
            const producto = productos.find((p) => p.id === Number(value));
            if (producto) {
                detalleVenta[index].precio_unitario = producto.precio;
            }
        }

        if (field === 'cantidad' || field === 'precio_unitario') {
            const cantidad = Number(detalleVenta[index].cantidad);
            const precio = Number(detalleVenta[index].precio_unitario);
            detalleVenta[index].subtotal = cantidad * precio;
        }

        setFormData({
            ...formData,
            detalle_venta: detalleVenta,
        });
    };

    const handleAddDetalleVenta = () => {
        const detalleVenta = [...formData.detalle_venta];
        detalleVenta.push({
            producto: '',
            cantidad: 0,
            precio_unitario: 0,
            subtotal: 0,
        });
        setFormData({
            ...formData,
            detalle_venta: detalleVenta,
        });
    };

    const handleRemoveDetalleVenta = (index) => {
        const detalleVenta = [...formData.detalle_venta];
        detalleVenta.splice(index, 1);
        setFormData({
            ...formData,
            detalle_venta: detalleVenta,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/ventas/create/', formData);
            console.log('Formulario enviado exitosamente');
            alert('La venta solo se realizara si cuentas con stock del producto');
            window.location.reload(); // Recargar la página
            // Mostrar alerta con el mensaje devuelto por el servidor
        } catch (error) {
            console.error(error);
            // Mostrar alerta de error
            if (error.response && error.response.data && error.response.data.mensaje) {
                alert(error.response.data.mensaje);
            } else {
                alert('Error al realizar la venta.');
            }
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Cliente:</label>
                <input
                    type="text"
                    className="form-control"
                    name="cliente"
                    value={formData.cliente}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Total:</label>
                <input
                    type="number"
                    className="form-control"
                    name="total"
                    value={formData.total}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Dirección de Envío:</label>
                <input
                    type="text"
                    className="form-control"
                    name="direccion_envio"
                    value={formData.direccion_envio}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Método de Pago:</label>
                <input
                    type="text"
                    className="form-control"
                    name="metodo_pago"
                    value={formData.metodo_pago}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Usuario:</label>
                <input
                    type="number"
                    className="form-control"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Detalle de Venta:</label>
                {formData.detalle_venta.map((detalle, index) => (
                    <div className="form-group" key={index}>
                        <div>
                            <label>Producto:</label>
                            <select
                                className="form-control"
                                name="producto"
                                value={detalle.producto}
                                onChange={(e) =>
                                    handleDetalleVentaChange(index, 'producto', e.target.value)
                                }
                            >
                                <option value="">Seleccione un producto</option>
                                {productos.map((producto) => (
                                    <option key={producto.id} value={producto.id}>
                                        {producto.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Cantidad:</label>
                            <input
                                type="number"
                                className="form-control"
                                name="cantidad"
                                value={detalle.cantidad}
                                onChange={(e) =>
                                    handleDetalleVentaChange(index, 'cantidad', e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label>Precio Unitario:</label>
                            <input
                                type="number"
                                className="form-control"
                                name="precio_unitario"
                                value={detalle.precio_unitario}
                                onChange={(e) =>
                                    handleDetalleVentaChange(
                                        index,
                                        'precio_unitario',
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <div>
                            <label>Subtotal:</label>
                            <input
                                type="number"
                                className="form-control"
                                name="subtotal"
                                value={detalle.subtotal}
                                readOnly
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveDetalleVenta(index)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
                <button type="button" className="btn btn-primary" onClick={handleAddDetalleVenta}>
                    Añadir Detalle
                </button>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
        </form>
    );
}
