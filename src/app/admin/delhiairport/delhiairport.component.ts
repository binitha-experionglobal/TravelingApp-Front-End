import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Delhiairport } from 'src/app/shared/delhiairport';
import { Traveler } from 'src/app/shared/traveler';
import { TravelerService } from 'src/app/shared/traveler.service';


@Component({
  selector: 'app-delhiairport',
  templateUrl: './delhiairport.component.html',
  styleUrls: ['./delhiairport.component.scss']
})
export class DelhiairportComponent implements OnInit {

  page:string='';
  filter:string='';

  constructor(public app:AppComponent, public service:TravelerService) { }

  ngOnInit(): void {
    this.service.delhiTravelers();
  }

}
