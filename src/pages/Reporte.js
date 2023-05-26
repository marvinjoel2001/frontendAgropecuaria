import React from 'react';
import programadorImg from '../assets/programador.png';

const Reporte = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <img src={programadorImg} alt="Programador" style={{ width: '600px' }} />
            <p style={{ marginTop: '20px', fontSize: '18px', textAlign: 'center' }}>
                Estamos trabajando para desarrollar este módulo
            </p>
        </div>
    );
};

export default Reporte;
