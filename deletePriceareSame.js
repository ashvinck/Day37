// Delete the products which product price value are same
app.delete("/products", async function (request, response) {
    const result = await client
        .db("Day37")
        .collection("products")
        .aggregate([
            { $group: { _id: "$product_price", count: { $sum: 1 } } },
            { $match: { count: { $gt: 1 } } },
        ])
        .forEach((doc) => {
            db.products.remove({ product_price: doc._id })
        })
    response.send({ msg: "Product deleted successfully" })
});