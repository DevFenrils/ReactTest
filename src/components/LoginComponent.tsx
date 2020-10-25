import * as React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { browserHistory } from 'react-router';

import { LoginService } from "../providers/LoginService";


class LoginComponent extends React.Component<{}, { pass: string, user: string, styles: any }> {
  public loginService;
  public useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }),
  );

  constructor(props) {
    super(props);
    this.state = {user: '', pass: '', styles: this.useStyles };
    this.loginService = new LoginService();

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUser(event) {
    this.setState({user: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({pass: event.target.value });
  }

  handleSubmit() {
    let user = {
      email: this.state.user,
      password: this.state.pass
    }
    this.loginService.loginUser(user).then((res) => {
      console.log(res);
      if(res.status == 200) {
        browserHistory.push("/home");

      }

    })
    .catch((err) => {
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
            <Typography variant="h6" className={this.state.styles.title}>
              Login
          </Typography>
          </Toolbar>
        </AppBar>
        <body>
          <div style={{ padding: 30}}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}>

              <form onSubmit={this.handleSubmit} className="grid-container">

                <Grid container item xs zeroMinWidth>
                  <Typography gutterBottom variant="subtitle1" className="input-width">
                    <TextField id="standard-basic" label="Usuario" value={this.state.user} onChange={this.handleChangeUser}  style={{ width: "100%"}}/>
                  </Typography>
                </Grid>
                <Grid container item xs zeroMinWidth>
                  <Typography gutterBottom variant="subtitle1" className="input-width">
                    <TextField id="standard-basic" label="Password" value={this.state.pass} onChange={this.handleChangePassword}  style={{ width: "100%"}}/>
                  </Typography>
                </Grid>
                <Grid container item >
                  <Typography gutterBottom variant="subtitle1" className="input-width input-margin">
                    <Button variant="contained" color="primary" className="input-width" onClick={() => { this.handleSubmit() }}>
                      Enviar
                    </Button>
                  </Typography>
                </Grid>


              </form>
            </Grid>
          </div>
        </body>
      </div>
    );
  }

}

export default LoginComponent;