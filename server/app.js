const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv/config");

const studentRouter = require('./router/student.router');
const AdminRouter = require('./router/admin.router');

var app = express();
app.use(cors());

const db = process.env.mongoURI;

app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`MongoDB connected successfully`))
  .catch((err) => console.log(`Error connecting mongodb ` + err));

  app.use('/api', studentRouter);
  app.use('/api', AdminRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
