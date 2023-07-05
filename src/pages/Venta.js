import * as React from 'react';
import Link from '@mui/material/Link';
import Title from '../components/Title';
import 'bootstrap/dist/css/bootstrap.css';

import DataTable from "../components/Datatable";
import FormularioVenta from "../components/FormVent";

// Generate Order Data

function preventDefault(event) {
    event.preventDefault();
}

export default function Venta() {
    const [showForm, setShowForm] = React.useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

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

    return (
        <React.Fragment>
            <div style={{ paddingTop: '64px', paddingRight: '16px' }}>
                <Title>Ventas</Title>
                <button type="button"
                        className={`btn ${showForm ? 'btn-danger' : 'btn-success'}`}
                        onClick={toggleForm}>
                    {showForm ? 'Cancelar' : 'Añadir Venta'}
                </button>
                {!showForm && <DataTable titles={titles} apiEndpoint={apiEndpoint} />}
                {showForm && <FormularioVenta />}
            </div>
        </React.Fragment>
    );
}
