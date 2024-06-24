import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

const productsRoutes = require('./src/routes/products.route');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/health-check', (req, res) => {
    res.json({ message: 'Server is running' });

});

app.use('/api/products', productsRoutes);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});