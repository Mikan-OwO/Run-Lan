const express = require("express");
const bodyParser = require("body-parser");
const { VM } = require("vm2");

const app = express();
const port = process.env.PORT;
app.use(bodyParser.text({ type: "text/*" }));
app.use(express.static("public", { extensions: ["html"] }));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.post("/js", async (req, res) => {
  const code = req.body;
  const vm = new VM({ timeout: 5000 });
  res.append("Content-Type", "application/json");
  res.append("Access-Control-Allow-Origin","https://mikan-owo.github.io");
  //実行
  try {
    const result = await vm.run(code);
    res.send({ result: String(result) });
  } catch (error) {
    res.send({ error: String(error) });
  }
});
