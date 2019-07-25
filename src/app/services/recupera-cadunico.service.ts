import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class RecuperaCadunicoService {

  constants: any = Constants;

  constructor(private http: HttpClient) { }

  post(data) {
    return this.http.post(`${this.constants.api}/cadunico`, data);
  }
}
