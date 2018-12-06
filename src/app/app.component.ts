import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { IUser } from './IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PromiseStudy';
  public countryCode:string;
  public countryData:string;
  public userId:string; 
  public userData:string; 

  constructor(private appService: AppService){

  }

  ngOnInit(){
      // this.appService.getAllPeople().subscribe(
      //   data=>{
      //       console.log(data.data[0].id);
      //       this.userId = data.data[0].id;


      //   },errorData=>{

      //   }
      // );


      this.appService.getAllPeople().then(data=>{
        console.log(data);
        this.userId = data.data[0].id;

        this.appService.getSpecificPeople(this.userId).then(
          (userData) => {
            this.userData = JSON.stringify(userData);
          }
        ).catch();

      }).catch(errorData=>{
        console.log("NO DATA");
      });
  }

}
