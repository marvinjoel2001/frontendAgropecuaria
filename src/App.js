import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Chart from './pages/Chart';
import Reporte from './pages/Reporte';
import Orders from './pages/Orders';
import Producto from './pages/Producto';
import Venta from './pages/Venta';
import Movimiento from './pages/Movimiento';
import User from './pages/User';
import DetalleVenta from './pages/DetalleVenta';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (




                        <Dashboard />



    );
}

export default App;
