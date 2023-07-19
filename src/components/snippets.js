import React, { useEffect, useState } from 'react';
import './snippetsstyle.css';

const Snippets = () => {
    const [ventasTotal, setVentasTotal] = useState(0);
    const [productosTotal, setProductosTotal] = useState(0);
    const [movimientosTotal, setMovimientosTotal] = useState(0);
    const [totalVentasSum, setTotalVentasSum] = useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/informacion-estadistica/')
            .then(response => response.json())
            .then(data => {
                setVentasTotal(data.ventastotal);
                setProductosTotal(data.productostotal);
                setMovimientosTotal(data.movimientostotal);
                setTotalVentasSum(data.totalventassum);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xl-3">
                        <div className="card bg-c-blue order-card">
                            <div className="card-block">
                                <h6 className="m-b-20">Ventas Totales</h6>
                                <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>{ventasTotal}</span></h2>
                                <p className="m-b-0">Ventas hechas<span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xl-3">
                        <div className="card bg-c-green order-card">
                            <div className="card-block">
                                <h6 className="m-b-20">Productos Registrados</h6>
                                <h2 className="text-right"><i className="fa fa-truck f-left"></i><span>{productosTotal}</span></h2>
                                <p className="m-b-0">Productos en stock<span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xl-3">
                        <div className="card bg-c-yellow order-card">
                            <div className="card-block">
                                <h6 className="m-b-20">Movimientos Totales</h6>
                                <h2 className="text-right"><i className="fa fa-refresh f-left"></i><span>{movimientosTotal}</span></h2>
                                <p className="m-b-0">Entradas y salidas<span className="f-right"></span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xl-3">
                        <div className="card bg-c-pink order-card">
                            <div className="card-block">
                                <h6 className="m-b-20">Ventas Ingreso</h6>
                                <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>{totalVentasSum}</span></h2>
                                <p className="m-b-0">Ingresos de ventas<span className="f-right">BS</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Snippets;
