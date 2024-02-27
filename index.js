import Express from "express";

const port = 3000;
const app = Express();

app.get("/", (req, res) => {
  res.render("home.ejs");
})

app.listen(port, () => {
  console.log("Server running on port " + port);
})