import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Location } from '../model/location.model';

@Injectable()
export class LocationService {
  private Locations;
  private serverURL;

  constructor(private http: Http) {
    this.serverURL = '/api/locations/';
  }

  get(): Observable<Location[]> {
    return this.http.get(this.serverURL)
      .map(response => response.json());
  }


}
