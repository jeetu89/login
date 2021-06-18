import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
myForm:FormGroup
errMsg:string;
  constructor(private fb:FormBuilder,private lser:LoginService) { }
chpass(){
  let fdata=this.myForm.getRawValue();
  if(fdata.np==fdata.cp)
  {
    let sendData={'op':fdata.op,'np':fdata.np,'uid':localStorage.getItem('sid')};
    this.lser.changePassword(sendData)
    .subscribe(res=>
      {
        console.log(res);
      })
  }
  else
  {
    this.errMsg="np and cp are not match";
  }
}

  ngOnInit() {
    this.validate()
  }

  validate()
  {
    this.myForm=this.fb.group({
      'op':["",Validators.required],
      'np':["",Validators.required],
      'cp':["",Validators.required]
    })
  }
}
