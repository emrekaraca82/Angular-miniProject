import { Component, OnInit,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-add-edit',
  templateUrl: './customer-add-edit.component.html',
  styleUrls: ['./customer-add-edit.component.css']
})
export class CustomerAddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() company:any;
  id:string;
  name:string;
  description:string;

  ngOnInit(): void {
    this.id=this.company.id;
    this.name=this.company.name;
    this.description=this.company.description;
  }

  addCompany(){
    var val = {
      id:this.id,
      name:this.name,
      description:this.description
    };
    this.service.addCompany(val).subscribe(res=>{
     //var myJSON = JSON.stringify(val);
      alert("Successfully");
      setTimeout(function(){
        location.reload();
      }, 700);
    });
  }

  updateCompany(){
    var val = {
      id:this.id,
      name:this.name,
      description:this.description
    };
    this.service.updateCompany(val).subscribe(res=>{
      //var myJSON = JSON.stringify(val);
      alert("Successfully");  
      setTimeout(function(){
        location.reload();
      }, 700);
    });
  }
  
}
