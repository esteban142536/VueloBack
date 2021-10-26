const express = require("express");
const cors = require("cors");
const db = require("./model/index.js");
const dotEnv = require("dotenv");

const app = express();
dotEnv.config();

// PORT
const PORT = "4000";
var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

app.use(express.json()); 

app.use(
  express.urlencoded({ extended: true })
);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Anti-Anxiety machine is working");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./routes/app.routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.listen(PORT, (req, res) => {
  console.log(`🗿🗿🗿🗿🗿🗿🗿 http://localhost:${PORT}/`);
});
