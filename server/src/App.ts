import express from 'express'
import Router from './router'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'
import * as bodyParser from 'body-parser'
import https from 'https';

class App {
  private app: any

  constructor() {
    this.app = express();

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.raw());



    new Router(this.app);

    this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    this.app.post('/test/post', bodyParser.urlencoded({ extended: true }), (req, res) => {
      res.status(200).json({ body: req.body });
    });

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
