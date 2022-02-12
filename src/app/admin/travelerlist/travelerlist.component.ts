import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TravelerService } from 'src/app/shared/traveler.service';

@Component({
  selector: 'app-travelerlist',
  templateUrl: './travelerlist.component.html',
  styleUrls: ['./travelerlist.component.scss']
})
export class TravelerlistComponent implements OnInit {
  page:number=1;
  filter:string='';
  constructor(public travelerService:TravelerService,public app:AppComponent) { }

  ngOnInit(): void {
    this.travelerService.getTravelers();
  }
  deleteTraveler(travelerId:number){
    if(confirm('Are you sure you want to Delete this record?')){
      this.travelerService.deleteTraveler(travelerId).subscribe(
        response=>{

        },
        error=>{
            console.log(error)
        }
      );
    }
  }

}
