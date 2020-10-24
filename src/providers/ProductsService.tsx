import constants from "../config/constants";

export class ProductsService {
    private _eventData: any;

    constructor () {}

   public getProducts() {
        return fetch(constants.BASE_URL + 'products', {
            method: 'GET',
          });
      }

      public addProduct(product) {
        return fetch(constants.BASE_URL + 'products', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: product.name,
              price: product.price,
              mark: product.mark              
            }),
          });
      }
}