import { Component } from '@angular/core';
import { faLinkedinIn, faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faPhone  = faPhone
  faEnvelope= faEnvelope
  faLinkedinIn = faLinkedinIn
  faFacebookF = faFacebookF
  faInstagramSquare = faInstagram
  faTwitter = faTwitter
  faYoutube = faYoutube
  faTiktok = faTiktok
  faXTwitter = faXTwitter
  email=""
}
