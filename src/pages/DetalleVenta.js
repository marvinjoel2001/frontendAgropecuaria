import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import DataTable from "../components/Datatable";

// Generate Order Data

function preventDefault(event) {
    event.preventDefault();
}



export default function DetalleVenta() {
    const titles = [
        {
            name: 'id',
            label: 'Id',
        },
        {
            name: 'cantidad',
            label: 'Cantidad',
        },
        {
            name: 'precio_unitario',
            label: 'Precio C/U',
        },
        {
            name: 'subtotal',
            label: 'Subtotal',
        },
        {
            name: 'producto',
            label: 'Codigo Producto',
        },
        {
            name: 'venta',
            label: 'Codigo de Venta',
        },
    ];
    const apiEndpoint = "http://127.0.0.1:8000/api/detallesventa/";
    return (
        <React.Fragment>
            <Title>Ventas Detalle</Title>
                <DataTable titles={titles} apiEndpoint={apiEndpoint} />
        </React.Fragment>
    );
}
