import React from 'react';
import programadorImg from '../assets/programador.png';
import Grafico from "../components/Grafico";
import BarChart from "../components/Grafico";
import Snippets from "../components/snippets";
import CardVentas from "../components/CardVentas";

const Reporte = () => {
    const endpoint = "http://127.0.0.1:8000/api/total/";
    const titulo1 = "cantidad";
    const titulo2 = "total";
    return (
        <React.Fragment>
            <h1>Datos estatisticos</h1>
            <Snippets/>
            <h1>REPORTE VENTA ultimos 10 dias</h1>
            <CardVentas/>

        </React.Fragment>
    );
};

export default Reporte;
