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

const titles = [
    {
        name: 'id',
        label: 'Id',
    },
    {
        name: 'total',
        label: 'Total',
    },
    {
        name: 'fecha',
        label: 'Fecha',
    },
    {
        name: 'direccion_envio',
        label: 'Direccion',
    },
    {
        name: 'metodo_pago',
        label: 'Metodo Pago',
    },
    {
        name: 'cliente',
        label: 'Cliente',
    },
    {
        name: 'usuario',
        label: 'Vendedor',
    },
];
const apiEndpoint = "http://127.0.0.1:8000/api/ventas/";
export default function Venta() {
    return (
        <React.Fragment>
            <Title>Ventas</Title>

                <DataTable titles={titles} apiEndpoint={apiEndpoint} />

            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}
