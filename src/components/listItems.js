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
import {CloseSharp} from "@mui/icons-material";
import AddToQueue from "@mui/icons-material/AddToQueue"

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
                <AddToQueue />
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
        <ListItemButton component="a" href="/Cerrar Sesion" sx={{ color: 'red' }}>
            <ListItemIcon sx={{ color: 'red' }}>
                <CloseSharp />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesion" primaryTypographyProps={{ style: { color: 'red' } }} />
        </ListItemButton>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Reportes de Ventas
        </ListSubheader>
        <ListItemButton component="a" href="ventas-dia">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Ventas ultimos 10 Días" />
        </ListItemButton>
    </React.Fragment>
);
