// Products which contain product color indigo and product price 492
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({ product_color: "indigo", product_price: "492" })
        .toArray()
    response.send(product);
});
