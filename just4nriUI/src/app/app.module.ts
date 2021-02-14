import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermodelComponent } from './usermodel/usermodel.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { AdminmodelComponent } from './adminmodel/adminmodel.component';


@NgModule({
  declarations: [
    AppComponent,
    UsermodelComponent,
    AdminmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
