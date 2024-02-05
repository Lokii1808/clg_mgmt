
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:String="";
  password:String="";
  userarray:any[]=[]
  

  constructor(private apiservice:ApiserviceService , private router: Router){}

  loginUser(){
    if(this.email!="" && this.password!=""){
      let data="email="+this.email
      this.apiservice.getUser(data).subscribe((response:any)=>{
        console.log(response);
        this.userarray=response;

        if(this.userarray.length>0 &&this.email==this.userarray[0].email && this.password==this.userarray[0].password){
          // alert("Login successful");
         
         this.router.navigate(['/Stdprofile']);

        }
        else{
          alert("invalid usename or password");
          
        }
      })
       
    }
  }

  navigateToRegisterComponent(){
    this.router.navigate(['/register'])
  }
}
