import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import { mainListItems, secondaryListItems } from './listItems';

import Chart from '../pages/Chart';
import Deposits from '../pages/Deposits';
import Orders from '../pages/Orders';
import Producto from '../pages/Producto';
import Venta from '../pages/Venta';
import DetalleVenta from '../pages/DetalleVenta';
import User from '../pages/User';
import Movimiento from '../pages/Movimiento';
import Reporte from '../pages/Reporte';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ReporteVenta from "../pages/ReporteVenta";

function CloseSharpIcon() {
    return null;
}

function LogoutButton({ handleLogout }) {
    const handleClick = () => {
        // Lógica para cerrar sesión
    };

    return (
        <ListItemButton component="button" onClick={handleLogout} sx={{ color: 'red' }}>
            <ListItemIcon sx={{ color: 'red' }}>
                <CloseSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" primaryTypographyProps={{ style: { color: 'red' } }} />
        </ListItemButton>
    );
}

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Sitio web hecho por Leonardo
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#bcfd7f', // Color primario verde claro
        },
    },
});

const MainContent = styled(Box)({
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
});

export default function Dashboard({ handleLogout }) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Router>
                    <AppBar position="absolute" open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Toolbar
                            sx={{
                                pr: '24px', // keep right padding when drawer closed
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                                Panel de Control
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={0} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <img
                                    src="usuario.jpg"
                                    alt="Usuario"
                                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open} sx={{ position: 'absolute', left: 0 }}>
                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            }}
                        >
                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Toolbar>
                        <Divider />
                        <List>{mainListItems}</List>
                        <Divider />
                        <List>{secondaryListItems}</List>
                    </Drawer>
                    <MainContent
                        component="main"
                        sx={{
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                            ml: { sm: open ? `-${drawerWidth}px` : 0 },
                            transition: (theme) =>
                                theme.transitions.create('margin', {
                                    easing: theme.transitions.easing.sharp,
                                    duration: theme.transitions.duration.leavingScreen,
                                }),
                            filter: open ? 'blur(3px)' : 'none', // Aplicar el filtro de desenfoque cuando open es true
                            paddingTop: '64px', // Altura de la AppBar
                        }}
                    >
                        <Toolbar />
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start',
                                            backgroundColor: 'primary.main', // Fondo verde claro
                                            height: '100%', // Abarcar toda la pantalla
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 4 }}>
                                            <h6 style={{ color: 'white' }}>En línea</h6>

                                            <img
                                                src="usuario.jpg"
                                                alt="Usuario"
                                                style={{ width: '35px', height: '35px', borderRadius: '50%' }}
                                            />
                                        </Box>
                                        <Switch>
                                            <Route exact path="/" component={Chart} />
                                            <Route path="/reporte" component={Reporte} />
                                            <Route path="/orders" component={Orders} />
                                            <Route path="/producto" component={Producto} />
                                            <Route path="/venta" component={Venta} />
                                            <Route path="/movimiento" component={Movimiento} />
                                            <Route path="/user" component={User} />
                                            <Route path="/detalleventa" component={DetalleVenta} />
                                            <Route path="/ventas-dia" component={ReporteVenta} />
                                        </Switch>
                                        <LogoutButton handleLogout={handleLogout} />
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Box sx={{ pt: 4 }}>
                                <Copyright />
                            </Box>
                        </Container>
                    </MainContent>
                </Router>
            </Box>
        </ThemeProvider>
    );
}
