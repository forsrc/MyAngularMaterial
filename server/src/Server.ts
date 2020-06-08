import App from './App'

const port = parseInt(process.env.PORT || '3000')

const Server = new App().Start(port)
  .then(port => console.log(`Server running on port ${port}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });

export default Server;