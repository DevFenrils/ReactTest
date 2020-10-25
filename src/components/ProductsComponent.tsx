import * as React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


import { browserHistory } from 'react-router';
import { ProductsService } from "../providers/ProductsService";


class ProductsComponent extends React.Component<{}, { open: boolean, products: any[] }> {
    public productsService;
    public name!: string;
    public price!: string;
    public mark!: string;

    constructor(props) {
        super(props);
        this.state = { open: false, products: [] };
        this.productsService = new ProductsService();
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleMark = this.handleMark.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.getClients();
    }

    handleName(event) {
        this.name = event.target.value;
    }

    handlePrice(event) {
        this.price = event.target.value;
    }

    handleMark(event) {
        this.mark = event.target.value;
    }

    setOpen(data) {
        this.setState({ open: data });
    }
    handleClickOpen = () => {
        this.setOpen(true);
    };

    handleClose = () => {
        this.setOpen(false);
    };

    getClients() {
        this.productsService.getProducts()
            .then(response => response.json())
            .then(data => this.setState({ products: data }));
    }


    addProduct() {
        let product = {
            name: this.name,
            price: this.price,
            mark: this.mark
        }
        this.productsService.addProduct(product).then((res) => {
            console.log(res);
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });

    }

    deleteProduct(id) {
        this.productsService.deleteProduct(id).then((res) => {
            console.log(res);
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });

    }

    render() {

        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Products
                        </Typography>
                    </Toolbar>
                </AppBar>
                <body>
                    <div style={{ padding: 30 }}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell align="right">Precio</TableCell>
                                        <TableCell align="right">Marca</TableCell>
                                        <TableCell align="right">Borrar</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.products.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.mark}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Delete">
                                                    <IconButton aria-label="delete" onClick={() => { this.deleteProduct(row.id) }}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography gutterBottom variant="subtitle1" className="input-margin">
                            <Button variant="contained" color="primary" onClick={() => { this.handleClickOpen() }}>
                                Anadir Producto
                            </Button>
                        </Typography>

                        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Añade la informacion de tu Producto
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Nombre Producto"
                                    type="text"
                                    fullWidth
                                    value={this.name}
                                    onChange={this.handleName}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="price"
                                    label="Precio Producto"
                                    type="text"
                                    fullWidth
                                    onChange={this.handlePrice}
                                    value={this.price}

                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="mark"
                                    label="Marca Producto"
                                    type="email"
                                    fullWidth
                                    onChange={this.handleMark}
                                    value={this.mark}


                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancelar
                                </Button>
                                <Button onClick={this.addProduct} color="primary">
                                    Enviar
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </body>
            </div>
        );
    }

}

export default ProductsComponent;