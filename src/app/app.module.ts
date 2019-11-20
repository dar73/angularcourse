import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnClickComponent } from './on-click/on-click.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponentComponent } from './user-component/user-component.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    OnClickComponent,
    UserComponentComponent,
    HomeComponent,
    PagenotfoundComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
