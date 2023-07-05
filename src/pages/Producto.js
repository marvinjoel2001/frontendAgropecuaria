import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Title from '../components/Title';
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from "../components/Datatable";
import AddProductForm from "../components/AddProductForm";

export default function Producto() {
    const titles = [
        {
            name: 'id',
            label: 'Id',
        },
        {
            name: 'nombre',
            label: 'Nombre',
        },
        {
            name: 'precio',
            label: 'Precio',
        },
        {
            name: 'descripcion',
            label: 'Descripcion',
        },
        {
            name: 'stock',
            label: 'Stock',
        },
        {
            name: 'fecha_creacion',
            label: 'Fecha_creacion',
        },
    ];
    const apiEndpoint = "http://127.0.0.1:8000/api/productos/";

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <React.Fragment>
            <div style={{ paddingTop: '64px', paddingRight: '16px' }}>
                <Title>Productos</Title>
                <button type="button"
                        className={`btn ${showForm ? 'btn-danger' : 'btn-success'}`}
                        onClick={toggleForm}>
                    {showForm ? 'Cancelar' : 'Añadir Producto'}
                </button>
                {!showForm && <DataTable titles={titles} apiEndpoint={apiEndpoint} />}
                {showForm && <AddProductForm apiEndpoint={apiEndpoint} />}
            </div>
        </React.Fragment>
    );

}
