import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private service:SharedService) { }
  companies:any=[];
  informations:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  isLoggedIn:boolean = false;
  company:any=[];
 
 
  ngOnInit(): void {
    this.refreshComList();
  }

  addClick(){
    this.company={
      id:0,
      name:"",
      description:""
    }
    this.ModalTitle="Add Company";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item){
    this.company=item;
    this.ModalTitle="Edit Company";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item){
    if(confirm('Emin misiniz ??')){
      this.service.deleteCompany(item.id).subscribe(data=>{
        alert("Successfully");
        this.refreshComList();
      })
    }
  }

  IntermediateInformationListClick(item){
    this.service.getIntermediateList1(item.id).subscribe(data=>{
      this.companies=data;
      this.informations=data;
      this.isLoggedIn = true;
    });
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshComList();
  }


  refreshComList(){
    this.service.getCompanyList().subscribe(data=>{
      this.companies=data;
    });
  }


}
