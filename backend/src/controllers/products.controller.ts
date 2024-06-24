import { getAllProductsService } from "../services/products.service";

const get = async (req, res, next) => {
    try {
        res.json(getAllProductsService());
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export {
    get
}