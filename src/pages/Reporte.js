import React from 'react';
import programadorImg from '../assets/programador.png';
import Grafico from "../components/Grafico";
import BarChart from "../components/Grafico";

const Reporte = () => {
    const endpoint = "http://127.0.0.1:8000/api/ventas/";
    const titulo1 = "total";
    const titulo2 = "fecha";
    return (
        <React.Fragment>
        <h1>Aplicación de Gráficos de Ventas</h1>
            <BarChart endpoint={endpoint} dataAttr1={titulo1} dataAttr2={titulo2} />
        </React.Fragment>
    );
};

export default Reporte;
