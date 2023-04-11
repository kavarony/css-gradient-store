import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/script.js';
    this.renderer.appendChild(document.head, script);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.location.reload();
    });
  }
}
