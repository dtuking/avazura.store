import { Component, Input } from '@angular/core';
import { faLinkedinIn, faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  faLinkedinIn = faLinkedinIn
  faFacebookF = faFacebookF
  faInstagramSquare = faInstagram
  faTwitter = faTwitter
  faYoutube = faYoutube
  faTiktok = faTiktok
  faXTwitter = faXTwitter
  @Input() iconColor!: string;
}
