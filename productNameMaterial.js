// Product name and product material of each products
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({}, { product_name: 1, product_material: 1 })
        .toArray();
    response.send(product);
});