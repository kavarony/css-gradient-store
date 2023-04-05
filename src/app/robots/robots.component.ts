import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.data.subscribe(data => {
          const robotsTxt = `User-agent: *
              Disallow: /admin
              Disallow: /private
              Sitemap: https://cssgradientstore.vercel.app/sitemap.xml`;

          const blob = new Blob([robotsTxt], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          window.open(url);
      });
  }
}
