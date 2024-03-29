import React from 'react';
import programadorImg from '../assets/programador.png';
import Grafico from "../components/Grafico";
import BarChart from "../components/Grafico";
import Snippets from "../components/snippets";

const Reporte = () => {
    const endpoint = "http://127.0.0.1:8000/api/total/";
    const titulo1 = "cantidad";
    const titulo2 = "total";
    return (
        <React.Fragment>
        <h1>Aplicación de Gráficos de Ventas</h1>
            <BarChart endpoint={endpoint} dataAttr1={titulo1} dataAttr2={titulo2} />
            <h1>Datos estatisticos</h1>
            <Snippets/>
        </React.Fragment>
    );
};

export default Reporte;
