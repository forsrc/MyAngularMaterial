import fs from 'fs';
import path from 'path';

import App from './App';
import InitDb from './InitDb';
import Test from './Test';

const port = parseInt(process.env.PORT || '3000');

const options = {
  // key: fs.readFileSync(path.resolve('./ssl/privatekey.pem')),
  // cert: fs.readFileSync(path.resolve('./ssl/certificate.pem'))
};



const Server = new App().Start(options, port)
  .then(p => console.log(`Server running on port ${p}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });

try {
  new InitDb().init();
} catch (error) {
  console.error(error);
}



new Test().test(new Test());

export default Server;