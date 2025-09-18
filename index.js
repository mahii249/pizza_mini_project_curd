const express= require('express');
const routes = require('./routes/items.js');

const app = express();


const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/items",routes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});