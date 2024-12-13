import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {}

  init() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const pageTitle = this.getPageTitle(this.activatedRoute);
        this.titleService.setTitle(pageTitle);
      });
  }

  private getPageTitle(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    const title = route.snapshot.data['title'];
    return title ? `${title} - Avazura` : 'Avazura';
  }
}
