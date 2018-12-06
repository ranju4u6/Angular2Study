import { Injectable } from "@angular/core";
import { ICountry } from "./ICountry";
import { IUser } from "./IUser";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { isBuffer } from "util";
import { IPage } from "./IPage";

@Injectable(
    {
        providedIn:"root"
    }
)
export class AppService{

    private getAllUrl:string = "http://services.groupkt.com/country/get/all";
    private getCountryUrl:string = "http://services.groupkt.com/country/get/iso2code/{alpha2_code}";

    constructor(private httpClient: HttpClient){

    }

    public getAllCountries(): Observable<ICountry>{ 
        return this.httpClient.get<ICountry>(this.getAllUrl);
    }

    public getCountryDetails(countryCode: string):Observable<string>{
        
        const getCustomCountryUrl:string = this.getCountryUrl.replace("{alpha2_code}",countryCode);
        console.log(getCustomCountryUrl);

        return this.httpClient.get<string>(getCustomCountryUrl);

    }

    public getAllPeople():Promise<IPage>{

        return this.httpClient.get<IPage>("https://reqres.in/api/users?page=2").toPromise();

    }

    public getSpecificPeople(id: string):Promise<JSON>{
        return this.httpClient.get<JSON>("https://reqres.in/api/users/"+id).toPromise();
    }

     
}