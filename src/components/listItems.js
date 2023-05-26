import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component="a" href="/movimiento">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Movimientos" />
        </ListItemButton>
        <ListItemButton component="a" href="/venta">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Ventas" />
        </ListItemButton>
        <ListItemButton component="a" href="/detalleventa">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Detalles Venta" />
        </ListItemButton>
        <ListItemButton component="a" href="/user">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
        </ListItemButton>
        <ListItemButton component="a" href="/reporte">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reportes" />
        </ListItemButton>
        <ListItemButton component="a" href="/producto">
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Producto" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Reportes de Ventas
        </ListSubheader>
        <ListItemButton component="a" href="/reportes/ventas-mes">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Ventas del Mes" />
        </ListItemButton>
        <ListItemButton component="a" href="/reportes/ventas-dia">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Ventas del Día" />
        </ListItemButton>
        <ListItemButton component="a" href="/reportes/ventas-anio">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Ventas del Año" />
        </ListItemButton>
    </React.Fragment>
);
