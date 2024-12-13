import { Component } from '@angular/core';
import { faLinkedinIn, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  faLinkedinIn = faLinkedinIn
  faFacebookF = faFacebookF
  faTwitter = faTwitter
}
