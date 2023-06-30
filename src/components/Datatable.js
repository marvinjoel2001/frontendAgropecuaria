import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';

const DataTable = ({ titles, apiEndpoint }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(apiEndpoint);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (rowsDeleted, newTableData) => {
        try {
            const deletedIndexes = rowsDeleted.data.map(row => row.dataIndex);//1
            const selectedRows = rowsDeleted.data.map(row => row.index);
            const idColumnIndex = titles.findIndex(title => title.name === 'id');
            for (const index of deletedIndexes) {
                const idColumnIndex = titles.findIndex(title => title.name === 'id');
                const id = data[index].id;
                try {
                    await fetch(`${apiEndpoint}${id}/`, {
                        method: 'DELETE',
                    });
                } catch (error) {
                    console.error('Error deleting data:', error);
                }
            }

            const updatedData = data.filter((_, index) => !deletedIndexes.includes(index));
            setData(updatedData);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };


    const options = {
        textLabels: {
            body: {
                noMatch: 'No se encontraron registros',
                toolTip: 'Ordenar',
                columnHeaderTooltip: column => `Ordenar por ${column.label}`,
            },
            pagination: {
                next: 'Siguiente Página',
                previous: 'Página Anterior',
                rowsPerPage: 'Filas por página:',
                displayRows: 'de',
            },
            toolbar: {
                search: 'Buscar',
                downloadCsv: 'Descargar CSV',
                print: 'Imprimir',
                viewColumns: 'Ver Columnas',
                filterTable: 'Filtrar Tabla',
            },
            filter: {
                all: 'Todo',
                title: 'FILTROS',
                reset: 'REINICIAR',
            },
            viewColumns: {
                title: 'Mostrar Columnas',
                titleAria: 'Mostrar/Ocultar Columnas de la Tabla',
            },
            selectedRows: {
                text: 'fila(s) seleccionada(s)',
                delete: 'Eliminar',
                deleteAria: 'Eliminar Filas Seleccionadas',
            },
        },
        onRowsDelete: (rowsDeleted, newTableData) => {
            handleDelete(rowsDeleted, newTableData);
        },
    };

    return (

        <MUIDataTable
            title="Tabla Ventas"
            data={data}
            columns={titles}
            options={options}
        />
    );
};

export default DataTable;

