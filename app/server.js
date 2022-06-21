const express = require('express');
const app = express();
const { sequelize } = require('./models/index');

// Settings
const PORT = process.env.PORT || 3002;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require('./routes'));

app.listen(PORT, function () {
  console.log(`Server app listening on http://localhost:${PORT}!`);

  sequelize.authenticate().then(() => {
      console.log('Data Base Not Found..!!');
  })
});