import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import DataTable from "../components/Datatable";
import Snippets from "../components/snippets";

// Generate Order Data

function preventDefault(event) {
    event.preventDefault();
}

export default function Movimiento() {
    const titles = [
        {
            name: 'id',
            label: 'Id',
        },
        {
            name: 'fecha',
            label: 'Fecha',
        },
        {
            name: 'tipo',
            label: 'Tipo',
        },
        {
            name: 'cantidad',
            label: 'Cantidad',
        },
        {
            name: 'motivo',
            label: 'Motivo',
        },
        {
            name: 'usuario',
            label: 'Vendedor',
        },
        {
            name: 'producto',
            label: 'CodigoProducto',
        },
    ];
    const apiEndpoint = "http://127.0.0.1:8000/api/movimientos/";


    return (
        <React.Fragment>
            <Title>Movimientos</Title>
            <Snippets/>
                <DataTable titles={titles} apiEndpoint={apiEndpoint} />
        </React.Fragment>
    );
}
