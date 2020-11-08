import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { TempService } from './services/temp.service';
import { AddTempComponent } from './tempdata/add-temp/add-temp.component';
import { ViewTempComponent } from './tempdata/view-temp/view-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AddTempComponent,
    
    ViewTempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
