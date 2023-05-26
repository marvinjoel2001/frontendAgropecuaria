import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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

    return (
        <div className="main-box-body clearfix" id="listadoregistros">
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-condensed table-hover" id="tbllistado">
                    <thead>
                    <tr>
                        {titles.map((title, index) => (
                            <th key={index}>{title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index} style={{ padding: '16px' }}>
                            {Object.values(item).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
