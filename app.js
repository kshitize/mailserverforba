const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");

const port = process.env.PORT || 8006;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})