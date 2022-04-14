export interface Step {
  uid: string;
  address: string;
  input: any;
  output: any;
  children: Step[];
}
