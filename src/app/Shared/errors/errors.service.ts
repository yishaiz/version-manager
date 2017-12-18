import { Injectable } from '@angular/core';
import { ErrorInfo } from '../error-info';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class ErrorsService {

  public error : ErrorInfo = new ErrorInfo();

  constructor () {

  }

  setError (isError : boolean = false, errorDescription : string = '') {
    const error = new ErrorInfo(isError, errorDescription);

    console.log('set error !!!');
    console.log(errorDescription);

    this.error.isError          = isError;
    this.error.errorDescription = errorDescription;

    debugger;
  }

}

