import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { FormsModule } from '@angular/forms';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ExpandableItemComponent } from './components/expandable-item/expandable-item.component';
import { CareerPageComponent } from './components/career-page/career-page.component';
import { PartnershipPageComponent } from './components/partnership-page/partnership-page.component';
import { OpenheaderComponent } from './components/openheader/openheader.component'; // Import FormsModule
import { TitleService } from './shared/services/title.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingpageComponent,
    FooterComponent,
    EmailFormComponent,
    SocialMediaComponent,
    AboutPageComponent,
    ContactPageComponent,
    ExpandableItemComponent,
    CareerPageComponent,
    PartnershipPageComponent,
    OpenheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [ Title,
    TitleService,
    {
      provide: APP_INITIALIZER,
      useFactory: (titleService: TitleService) => () => titleService.init(),
      deps: [TitleService],
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule {}
