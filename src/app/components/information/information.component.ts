import { Component, OnInit } from '@angular/core';
import { Information } from 'src/app/models/Information';
import { HttpClient } from '@angular/common/http'
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private service:SharedService) { }

  informations:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  show:boolean = false;
  information:any;

  companies:any=[];

  ngOnInit(): void {
    this.refreshInfList();
  }

  addClick(){
    this.information={
      id:0,
      firstName:"",
      image:"anonymous.png"
    }
    this.ModalTitle="Add Information";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item){
    this.information=item;
    this.ModalTitle="Edit Information";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item){
    if(confirm('Emin misiniz ??')){
      this.service.deleteInformation(item.id).subscribe(data=>{
        alert("Successfully");
        this.refreshInfList();
      })
    }
  }

  IntermediateCompanyListClick(item){
    this.service.getIntermediateList(item.id).subscribe(data=>{
      this.informations=data; 
      this.companies=data; 
      this.show=true;   
    });
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshInfList();
  }


  refreshInfList(){
    this.service.getInformationList().subscribe(data=>{
      this.informations=data;
      
    });
  }


}
