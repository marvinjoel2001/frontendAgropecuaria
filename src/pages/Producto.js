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
const titles = ["Id", "Nombre", "Precio", "Descripcion", "Stock", "Fecha Añadido"];
const apiEndpoint = "http://127.0.0.1:8000/api/productos";
export default function Producto() {
    return (
        <React.Fragment>
            <Title>Productos</Title>
            <Table size="small">
                <h1>Tabla Productos</h1>
                <DataTable titles={titles} apiEndpoint={apiEndpoint} />
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}
