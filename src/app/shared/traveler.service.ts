import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{Traveler}from './traveler';
import{Delhiairport}from './delhiairport';
import{Namea}from './namea';
import{Flightdata}from './flightdata';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {
traveler:Traveler[];
delhi:Delhiairport[];
namea:Namea[];
flightdata:Flightdata[];
formData:any;
  constructor(public httpClient:HttpClient) { }

  getTravelers(){
    return this.httpClient.get(environment.apiUrl+'travels/ViewTravellers')
    .toPromise()
    .then(
      result=>{
        console.log('from traveler service');
        console.log(result);
        this.traveler=result as Traveler[];
      },
      error=>{
        console.log(error);
      }

    );
  }
    deleteTraveler(travelerId:Number){
      return this.httpClient.delete(environment.apiUrl+'travels/'+travelerId)
    }



    delhiTravelers(){
      return this.httpClient.get(environment.apiUrl+'travels/TravelerFromDelhi')
      .toPromise()
      .then(
        result=>{
          console.log('from traveler service');
          console.log(result);
          this.delhi=result as Delhiairport[];
        },
        error=>{
          console.log(error);
        }

      );
    }

    nameWithA(){
      return this.httpClient.get(environment.apiUrl+'travels/FindTraveler')
      .toPromise()
      .then(
        result=>{
          console.log('from traveler service');
          console.log(result);
          this.namea=result as Namea[];
        },
        error=>{
          console.log(error);
        }

      );
    }


    getFlightData(){

      return this.httpClient.get(environment.apiUrl+'travels/ViewFlightData')
      .toPromise()
      .then(
        result=>{
          console.log('from traveler service');
          console.log(result);
          this.flightdata=result as Flightdata[];
        },
        error=>{
          console.log(error);
        }

      );

    }


}
