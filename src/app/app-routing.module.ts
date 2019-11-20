import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SettingComponent } from './setting/setting.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  {
    path:'users',component:UserComponentComponent,
    children:[
      {
        path:'settings',component:SettingComponent
      }
    ]
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
