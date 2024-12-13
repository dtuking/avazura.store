import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CareerPageComponent } from './components/career-page/career-page.component';
import { PartnershipPageComponent } from './components/partnership-page/partnership-page.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent , data: { title: 'Home' }},
  { path: 'about', component: AboutPageComponent , data: { title: 'About' }},
  { path: 'contact', component: ContactPageComponent , data: { title: 'Contact' }},
  { path: 'career', component: CareerPageComponent, data: { title: 'Career' }},
  { path: 'partnership', component: PartnershipPageComponent,data: { title: 'Partnerships' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
