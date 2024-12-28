let { app } = require("./index.js");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//-----
app.get("/discount", (req, res)=>{
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);
  let result = price - (price * discount / 100);
  res.send(`The discounted price is ${result}`);
})