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

export default function User() {
    const titles = [
        {
            name: 'id',
            label: 'Codigo de Usuario',
        },
        {
            name: 'username',
            label: 'Nombre',
        },
        {
            name: 'email',
            label: 'Correo electronico',
        },
        {
            name: 'date_joined',
            label: 'Fecha Añadido',
        },
    ];
    const apiEndpoint = "http://127.0.0.1:8000/api/user/";
    return (
        <React.Fragment>
            <Title>Usuarios</Title>
            <Table size="small">
                <h1>Vendedores</h1>
                <DataTable titles={titles} apiEndpoint={apiEndpoint} />
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}
