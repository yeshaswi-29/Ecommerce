const express = require("express");
const cors = require("cors");
const router = require("./routes");
require("dotenv").config();
const app = express();
app.use(
  cors()
);
app.use(express.json())
app.use('/api',router)
const connectDB = require('./config/db')

// app.use(express.json());
// app.use(cookieParser());

// app.use("/api", router);

const PORT = 8080 || process.env.PORT;
connectDB().then(()=>{
app.listen(PORT, () => {
  console.log("Server is running " + PORT);
});
})
  
