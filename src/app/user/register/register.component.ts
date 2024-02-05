
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
name:String="";
email:String ="";
password:String="";
phone:String ="";
dept:String="";
msg:String="";
cpassword:String="";



  // routing from register page to login page
  constructor(private router: Router, private apiservice:ApiserviceService) {}
   
  
  
  navigateToLoginComponent() {
    this.router.navigate(['/login']);
  }
  

  regUser(){
    if(this.name!="" &&  this.password!=""  && this.dept!=""
    &&this.email!="" && this.password==this.cpassword &&this.phone!==""){
   
    
   let reguser=
   {
     name:this.name,
     email:this.email,
     dept:this.dept,
     password:this.password,
     phone:this.phone
   
    }
    this.apiservice.insertUser(reguser).subscribe((Response)=>{console.log(Response)})
    alert("registered successfully");
   }
   
   else{
     this.msg=" invalid ";
   }
   
   }


   resetreg(){
 this.name="",
 this.password="",
 this.cpassword="",
 this.dept="",
 this.email="",
 this.phone="";

   }
}