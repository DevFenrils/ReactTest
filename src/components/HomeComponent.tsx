import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { browserHistory } from 'react-router';

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
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
                            Home
          </Typography>
                    </Toolbar>
                </AppBar>
                <body>
                    <div style={{ padding: 30 }}>
                        <Grid container
                            justify="center"
                            alignItems="center"
                            spacing={3}>

                            <Grid container item xs={8} sm={4}>
                                <Card style={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ height: 140 }}
                                            image="images/clients.png"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Clientes
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Crea o busca información sobre tus clientes
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Button size="small" color="primary" onClick={() => {
                                            browserHistory.push("/clients");
                                        }}>
                                            Entrar
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid container item xs={8} sm={4} >
                                <Card style={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ height: 140 }}
                                            image="images/products.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Productos
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Crea o busca información sobre tus productos
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Button size="small" color="primary" onClick={() => {
                                            browserHistory.push("/products");
                                        }}>
                                            Entrar
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </body>
            </div>
        );
    }
}

export default HomeComponent;