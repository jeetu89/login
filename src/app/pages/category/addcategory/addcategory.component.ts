import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategroyService } from 'src/app/service/category.service';
import swal from 'sweetalert2';

import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  myForm: FormGroup;
  imageName: any;
  resData;
 
  constructor(private fb: FormBuilder, private catser:CategroyService) {
    this.myForm = this.fb.group({
      cname: ['', Validators.required]
    });
  }
  myImage(event) {
    if (event.target.files.length > 0) {
      this.imageName = event.target.files[0];
      console.log(this.imageName);
    }
  }
  
  addcat() {
    // tslint:disable-next-line: curly
    if (this.imageName !== undefined) {
      const cname = this.myForm.controls.cname.value;

      // Use formData when we send any attachment
      const formData = new FormData();
      formData.append('cname', cname);
      formData.append('attach', this.imageName);
      this.catser.addCategory(formData)
        .subscribe(res => {
          console.log(res);
          Swal.fire({ title: 'Category Succesfully Added', timer: 2000 });
          //   this.resData=res;
          // //   if(this.resData.err==0)
          // //   {
          // //     this.sussMsg=this.resData.msg;
          // //   }
          // // })
        });
    } else {
      // console.log('Plz select a image');
      swal.fire('Plz Select a Image');

      // error plz select image
    }
  }
  ngOnInit() {
  
  }

}

