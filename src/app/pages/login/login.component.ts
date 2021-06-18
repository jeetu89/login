import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Router} from '@angular/router'
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup
  resData
  errMsg

  constructor(private router:Router, private fb:FormBuilder,private lser:LoginService) { }

  ngOnInit() {
    this.validate()
  }

  postData()
  {
    let fdata=this.myForm.getRawValue();
    // alert("Login successfully")
    console.log(fdata)
    this.lser.loginAdmin(fdata)

    .subscribe(res=>
     {
       this.resData=res;
      
       if(this.resData.err==0)
       {
         localStorage.setItem('sid',this.resData.uid);
          this.router.navigate(['/dashboard'])
       }
       if(this.resData.err==1)
       {
         this.errMsg=this.resData.msg;
       }
      },err=>
      {
        console.log(err);
      })
      

  }


  validate()
  {

    
    this.myForm=this.fb.group(
      {
        'email':['',[Validators.required, Validators.pattern("[a-zA-Z0-9_.@]+")]],
        'pass':['',[Validators.required,]],
        
      }
    )
  }
}


