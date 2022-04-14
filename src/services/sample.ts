export class SampleService {
  static async sampleFunction() {
    // do database logic etc in here

    // if error, can just `throw new Error("this is err message")`
    // and the exception handler will automatically take it
  }
}
