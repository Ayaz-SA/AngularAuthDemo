import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsURL = "http://localhost:3000/api/events";
  private specialEventsURL = "http://localhost:3000/api/specials";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this.eventsURL);
  }

  getSpecialEvents() {
    return this.http.get<any>(this.specialEventsURL);
  }
}
