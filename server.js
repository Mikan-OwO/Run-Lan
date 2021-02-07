const express = require("express");
const bodyParser = require("body-parser");
const { format } = require("prettier");
const { VM, NodeVM, VMScript } = require("vm2");
const { inspect } = require("util");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

const corsOptions = {
  "origin": "*",
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
    const result = await vm.run(`const logs = []; console.log = text => { logs.push(text); return logs.join("\\n") }; ${code}`);
    res.send({
      result: isType(result)
    });
  } catch (error) {
    res.send({ error: String(error) });
  }
});

app.post("/format", async (req, res) => {
  const code = req.body;
  
  res.append("content-type", "application/json");
  
  try {
    const result = await format(code, { parser: "typescript" });
    res.send({
      result: result
    });
  } catch (error) {
    res.send({ error: String(error) });
  }
});
  

function isType(content) {
  switch(typeof content) {
    case "string":
      return String(content);
     break;
      
    default:
      return inspect(content);
     break;
  }
}
