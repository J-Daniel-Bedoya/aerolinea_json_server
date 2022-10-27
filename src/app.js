const jsonServer = require("json-server");
const app = jsonServer.create();

const router = jsonServer.router(`${__dirname}/data/db.json`);
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(router);
app.use(middlewares);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en la ruta: http://localhost:${PORT}/vuelos`);
});