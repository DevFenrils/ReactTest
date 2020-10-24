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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { browserHistory } from 'react-router';
import { ClientsService } from "../providers/ClientsService";


class ClientsComponent extends React.Component<{}, { open: boolean, clients: any[] }> {
    public clientService;
    public first_name!: string;
    public second_name!: string;
    public email!: string;

    constructor(props) {
        super(props);
        this.state = { open: false, clients: []};
        this.clientService = new ClientsService();
        this.handleName = this.handleName.bind(this);
        this.handleSecondName = this.handleSecondName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.addClient = this.addClient.bind(this);
        this.getClients();
    }

    handleName(event) {
        this.first_name = event.target.value;
    }

    handleSecondName(event) {
        this.second_name = event.target.value;
    }

    handleEmail(event) {
        this.email = event.target.value;
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
        this.clientService.getClients()
            .then(response => response.json())
            .then(data => this.setState({clients: data }));
    }

    addClient() {
        let client = {
            first_name: this.first_name,
            second_name: this.second_name,
            email: this.email
        }
        this.clientService.addClient(client).then((res) => {
            console.log(res);
            this.handleClose();
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
                            Clients
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
                                        <TableCell align="right">Apellido</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.clients.map((row) => (
                                        <TableRow key={row.first_name}>
                                            <TableCell component="th" scope="row">
                                                {row.first_name}
                                            </TableCell>
                                            <TableCell align="right">{row.second_name}</TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography gutterBottom variant="subtitle1" className="input-margin">
                            <Button variant="contained" color="primary" onClick={() => { this.handleClickOpen() }}>
                                Anadir Cliente
                            </Button>
                        </Typography>

                        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Añade la informacion de tu Cliente
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Nombre Cliente"
                                    type="text"
                                    fullWidth
                                    value={this.first_name}
                                    onChange={this.handleName}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="second_name"
                                    label="Apellido Cliente"
                                    type="text"
                                    fullWidth
                                    onChange={this.handleSecondName}
                                    value={this.second_name}

                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="naemailme"
                                    label="Email Cliente"
                                    type="email"
                                    fullWidth
                                    onChange={this.handleEmail}
                                    value={this.email}


                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancelar
                                </Button>
                                <Button onClick={this.addClient} color="primary">
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

export default ClientsComponent;