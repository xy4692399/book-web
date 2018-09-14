import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Library} from './libraries/library';
import {Result} from './libraries/result';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private url = 'http://localhost:8080/wx/goodsCDK'

  constructor( private http: HttpClient) { }

  getLibraries () {
    return this.http.get<Result>(this.url);
  }
}
