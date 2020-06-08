import express from 'express'
import Router from './router'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'
import * as bodyParser from 'body-parser'
import https from 'https';

class App {
  private app: any

  constructor() {
    this.app = express()

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    new Router(this.app);

    this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  public Start = (options: any, port: number) => {
    return new Promise((resolve, reject) => {

      https.createServer(options, this.app).listen(
        port,
        () => {
          resolve(port)
        })
        .on('error', (err: object) => reject(err));
    })
  }
}

export default App;
