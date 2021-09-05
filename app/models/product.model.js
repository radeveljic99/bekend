const sql = require('./db.js');

const Product = function(product) {
    this.name = product.name;
    this.price = product.price;
    this.path = product.path;
    this.category_id = product.category_id;
}

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO product SET ? ", newProduct, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log("created product: ", {id: res.insertId, ...newProduct});
        result(null, {id: res.insertId, ...newProduct});
    });
};

Product.getAll = result => {
    sql.query("SELECT * FROM product", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("products", res);
        result(null, res);
    })
}
module.exports = Product;
