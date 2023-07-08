const products = require("./constants/data")
const productSchema = require("./model/product_schema")

const DefaultData = async() =>{
    try {
        await productSchema.insertMany(products);
        console.log("Data imported successfully");
    } catch (error) {
        console.log('Error while inserting default data',error.message);
    }
}

module.exports = DefaultData