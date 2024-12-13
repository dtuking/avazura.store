import { Component } from '@angular/core';
import { faLinkedinIn, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  faLinkedinIn = faLinkedinIn
  faFacebookF = faFacebookF
  faTwitter = faTwitter
  faBars = faBars
}
