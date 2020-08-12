const express = require("express");
const bodyParser = require("body-parser");
const { VM } = require("vm2");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: 'https://mikan-owo.github.io',
  optionsSuccessStatus: 200
}

app.use(bodyParser.text({ type: "text/*" }));
app.use(express.static("public", { extensions: ["html"] }));
app.use(cors(corsOptions))

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.post("/js", async (req, res) => {
  const code = req.body;
  const vm = new VM({ timeout: 5000 });
  
  res.append("content-type", "application/json");
  
  try {
    const result = await vm.run(code);
    res.send({ result: String(result) });
  } catch (error) {
    res.send({ error: String(error) });
  }
});
