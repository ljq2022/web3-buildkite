import { exceptionHandler } from "../utils/exceptionHandler";
import { SampleService } from "../services/sample";

export class SampleController {
  static async sampleFunction(req, res) {
    // call the service in here
    // if error, can just `throw new Error("this is message")`
  }
}
