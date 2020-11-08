import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTempComponent } from './tempdata/add-temp/add-temp.component';
import { ViewTempComponent } from './tempdata/view-temp/view-temp.component';


const routes: Routes = [
  
  { path: 'addData', component : AddTempComponent},
  { path: 'viewData', component: ViewTempComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
