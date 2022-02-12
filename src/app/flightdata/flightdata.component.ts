import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TravelerService } from '../shared/traveler.service';

@Component({
  selector: 'app-flightdata',
  templateUrl: './flightdata.component.html',
  styleUrls: ['./flightdata.component.scss']
})
export class FlightdataComponent implements OnInit {
  page:number=1;
  filter:string='';

  constructor(public travelerService:TravelerService,public app:AppComponent) { }

  ngOnInit(): void {
    this.travelerService.getFlightData();
  }

}
