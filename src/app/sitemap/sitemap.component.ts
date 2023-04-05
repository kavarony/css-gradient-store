import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent {
  constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(data => {
            const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset
                  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            
            
              <url>
                <loc>https://cssgradientstore.vercel.app/home</loc>
                <lastmod>2023-04-05T04:40:00+00:00</lastmod>
              </url>
              <url>
                <loc>https://cssgradientstore.vercel.app/about</loc>
                <lastmod>2023-04-05T04:40:33+00:00</lastmod>
              </url>
              <url>
                <loc>https://cssgradientstore.vercel.app/contact</loc>
                <lastmod>2023-04-05T04:41:09+00:00</lastmod>
              </url>
            </urlset>`;

            const blob = new Blob([sitemapXml], { type: 'application/xml' });
            const url = URL.createObjectURL(blob);
            window.open(url);
        });
    }
}
