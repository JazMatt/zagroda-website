import express from "express";
import fs from "fs/promises";

const port = 3000;
const app = express();
app.use(express.static("public"));

app.get("/", async (req, res) => {

  // Getting offer description from file
  let desc = "";
  try {
    desc = (await readDescFromFile());
    desc = desc.replace(/\n/g, "<br>");
  } catch (err) {
    console.error("Error reading file:", err);
    desc = "😊";
  }
  
  res.render("home.ejs", { description: desc });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});

async function readDescFromFile() {
  try {
    const data = await fs.readFile('public/resources/desc.txt', 'utf8');
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    return "";
  }
}
