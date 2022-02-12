import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TravelerService } from 'src/app/shared/traveler.service';

@Component({
  selector: 'app-namea',
  templateUrl: './namea.component.html',
  styleUrls: ['./namea.component.scss']
})
export class NameaComponent implements OnInit {
  page:string='';
  filter:string='';

  constructor(public app:AppComponent, public name:TravelerService) { }

  ngOnInit(): void {
    this.name.nameWithA();
  }

}
