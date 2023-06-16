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
    const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        window.location.reload(); // Recargar la página después de iniciar sesión
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        window.location.reload();
    };

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/login">
                        {isLoggedIn ? <Redirect to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />}
                    </Route>
                    <Route path="/">
                        {isLoggedIn ? <Dashboard handleLogout={handleLogout} /> : <Redirect to="/login" />}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
