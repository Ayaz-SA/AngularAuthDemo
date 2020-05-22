import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specials-events',
  templateUrl: './specials-events.component.html',
  styleUrls: ['./specials-events.component.scss']
})
export class SpecialsEventsComponent implements OnInit {

  specialEvents = []

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401){
              this.router.navigate(['/login'])
            }
          }
        }
      )
  }

}
