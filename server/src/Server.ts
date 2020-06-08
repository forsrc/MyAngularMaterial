import fs from 'fs';
import path from 'path';

import App from './App';

const port = parseInt(process.env.PORT || '3000');

const options = {
  key: fs.readFileSync(path.resolve('./ssl/privatekey.pem')),
  cert: fs.readFileSync(path.resolve('./ssl/certificate.pem'))
};


const Server = new App().Start(options, port)
  .then(port => console.log(`Server running on port ${port}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });

export default Server;