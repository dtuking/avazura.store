import { Component } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-openheader',
  templateUrl: './openheader.component.html',
  styleUrls: ['./openheader.component.css']
})
export class OpenheaderComponent {
  faBars =faBars
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
