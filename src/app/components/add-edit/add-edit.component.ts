import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() information:any;
  id:string;
  company:string;
  firstName:string;
  lastName:string;
  gsm:string;
  businessPhone:string;
  address:string;
  image:string;
  PhotoFilePath:string;

  companies:any=[];

  ngOnInit(): void {  
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getCompanyList().subscribe((data:any)=>{
      this.companies=data;

      this.id=this.information.id;
      this.company=this.information.company;
      this.firstName=this.information.firstName;
      this.lastName=this.information.lastName;
      this.gsm=this.information.gsm;
      this.businessPhone=this.information.businessPhone;
      this.address=this.information.address;
      this.image=this.information.image;
      this.PhotoFilePath=this.service.PhotoUrl+this.image;
    });
  }

  addInformation(){
    var val = {
      id:this.id,
      company:this.company,
      firstName:this.firstName,
      lastName:this.lastName,
      gsm:this.gsm, 
      businessPhone:this.businessPhone,
      address:this.address,
      image:this.image
    };
    this.service.addInformation(val).subscribe(res=>{
     //var myJSON = JSON.stringify(val);
      alert("Successfully");
      setTimeout(function(){
        location.reload();
      }, 700);
    });
  }

  updateInformation(){
    var val = {
      id:this.id,
      company:this.company,
      firstName:this.firstName,
      lastName:this.lastName,
      gsm:this.gsm, 
      businessPhone:this.businessPhone,
      address:this.address,
      image:this.image
    };
    this.service.updateInformation(val).subscribe(res=>{
      //var myJSON = JSON.stringify(val);
      alert("Successfully");  
      setTimeout(function(){
        location.reload();
      }, 700);
    });
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.image=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.image;
    })
  }

}
