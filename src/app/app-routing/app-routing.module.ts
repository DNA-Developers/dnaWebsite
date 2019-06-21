import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { SuccessComponent } from '../components/success/success.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
 
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact/success', component: SuccessComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes

    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}