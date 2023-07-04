import * as React from 'react';
import Link from '@mui/material/Link';
import Title from '../components/Title';
import DataTable from "../components/Datatable";
import FormularioVenta from "../components/FormVent";

// Generate Order Data

function preventDefault(event) {
    event.preventDefault();
}
function showForm(){

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
            <div style={{ paddingTop: '64px', paddingRight: '16px' }}>
                <Title>Ventas</Title>
                <button onClick={showForm}>Añadir Venta</button>
                <DataTable titles={titles} apiEndpoint={apiEndpoint} />
                <FormularioVenta/>
                <Link color="primary" href="#" onClick={preventDefault} style={{ marginTop: '16px' }}>
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    );
}
