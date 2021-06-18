import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uid: String;

  constructor(private router:Router) { }
  logout()
    {
      let con=confirm("Do u want to Logout");
      if(con)
      {
      localStorage.removeItem('sid');
      this.router.navigate(["/"]);
      }
    }
  

  ngOnInit() {
    this.uid=localStorage.getItem('sid');
  }
  

}
