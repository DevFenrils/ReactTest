import constants from "../config/constants";

export class ClientsService {
    private _eventData: any;

    constructor () {}

   public getClients() {
        return fetch(constants.BASE_URL + 'clients', {
            method: 'GET',
          });
      }

      public addClient(client) {
        return fetch(constants.BASE_URL + 'clients', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              first_name: client.first_name,
              second_name: client.second_name,
              email: client.email              
            }),
          });
      }

      public deleteClient(id) {
        return fetch(constants.BASE_URL + 'clients/'+id, {
            method: 'DELETE'
          });
      }
}