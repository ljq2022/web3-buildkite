import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { exceptionHandler } from "./utils/exceptionHandler";
import {
  convertYamlToGroupsArray,
  runGroupsArray,
} from "./services/configService/helpers";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

const port = process.env.PORT || 5000;

app.use("/api", require("./routes"));

app.use(exceptionHandler); // must be last middleware func

app.get("/", (req, res) => {
  res.send("This is the edu feedback platform server");
});

app.listen(port, () => {
  const stepGroups = convertYamlToGroupsArray(
    "src/services/configService/testConfig2.yaml"
  );
  console.log(stepGroups);
  console.log(runGroupsArray(stepGroups));
  console.log(`🚀 Server is running on port: ${port}`);
});
