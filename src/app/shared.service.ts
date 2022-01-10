import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44336/api";
readonly PhotoUrl = "https://localhost:44336/Photos/";

  constructor(private http:HttpClient) { }

  getInformationList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Information/getall/');
  }

  getIntermediateList(val:any){
    return this.http.get(this.APIUrl+'/Intermediate/getInformationList?id='+val);
  }

  addInformation(val:any){
    return this.http.post(this.APIUrl+'/Information/add/',val);
  }

  updateInformation(val:any){
    return this.http.put(this.APIUrl+'/Information/update?id='+val.id,val);
   
  }

  deleteInformation(val:any){
    return this.http.delete(this.APIUrl+'/Information/delete?id='+val);
  }


  getCompanyList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Company/getall');
  }

  getIntermediateList1(val:any){
    return this.http.get(this.APIUrl+'/Intermediate/getCompanyList?id='+val);
  }

  addCompany(val:any){
    return this.http.post(this.APIUrl+'/Company/add',val);
  }

  updateCompany(val:any){
    return this.http.put(this.APIUrl+'/Company/update?id='+val.id,val);
  }

  deleteCompany(val:any){
    return this.http.delete(this.APIUrl+'/Company/delete?id='+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Information/SaveFile',val);
  }

}
