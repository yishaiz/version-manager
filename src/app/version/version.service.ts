import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class VersionService {

  constructor (private  http : HttpClient) {

  }

  getNextVersion () {
    const url = '/api/next-version';

    return this.http.post(url, null);

  }

}
