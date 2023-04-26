import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-color-contrast-checker',
  templateUrl: './color-contrast-checker.component.html',
  styleUrls: ['./color-contrast-checker.component.css']
})

export class ColorContrastCheckerComponent {
  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/contrastratio.js';
    this.renderer.appendChild(document.head, script);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.location.reload();
    });
  }
}
