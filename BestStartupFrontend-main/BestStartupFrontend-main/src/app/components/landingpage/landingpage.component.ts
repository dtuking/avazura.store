import { Component } from '@angular/core';
import { faLinkedinIn, faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
    faLinkedinIn = faLinkedinIn
    faFacebookF = faFacebookF
    faInstagramSquare = faInstagram
    faTwitter = faTwitter
    faYoutube = faYoutube
    faTiktok = faTiktok
    faXTwitter = faTwitter
    email: string = ""

    submitEmail() {
      // Save the value and clear the input field
      console.log('Submitted email:', this.email);
      this.email = '';
  }
}
