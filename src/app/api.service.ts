import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  initialUrl = 'https://api.spacexdata.com/v3/launches?limit=100';
  launchUrl = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true';
  landingUrl = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.initialUrl);
  }
  getLaunch() {
    return this.http.get(this.launchUrl);
  }
  getLanding() {
    return this.http.get(this.landingUrl);
  }


}
