import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { ChangepassComponent } from './pages/dashboard/changepass/changepass.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component'
import { AddcategoryComponent } from './pages/category/addcategory/addcategory.component';



const routes: Routes = [
  {path:'',component: LoginComponent},
  { path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'changepass',component:ChangepassComponent},
    {path:'category',component:CategoryComponent},
    { path: 'addcategory', component: AddcategoryComponent },
    {path:'product',component:ProductComponent},
    {path:'addproduct',component:AddproductComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
