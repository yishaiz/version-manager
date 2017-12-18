export class ActionResult {
  isSucceeded : boolean;
  errorMessage : string;
  data : any;

  constructor (isSucceeded : boolean, errorMessage : string, data : any = null) {
    this.isSucceeded  = isSucceeded;
    this.errorMessage = errorMessage;
    this.data         = data;
  }
}
