import constants from "../config/constants";

export class LoginService {
    private _userData: any;

    constructor () {}

   public loginUser(userData: any) {
     //TODO: Gestion de token y seguridad, ahora solo verifica que el email y pass son correctos
        return fetch(constants.AUTH_URL + 'Login', {
            method: 'POST',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: userData.email,
              password: userData.password,
            }),
          });
      }
}