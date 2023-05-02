import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-contrast-checker',
  templateUrl: './color-contrast-checker.component.html',
  styleUrls: ['./color-contrast-checker.component.css']
})

export class ColorContrastCheckerComponent implements OnDestroy {
  constructor(private renderer: Renderer2, private router: Router) {}
  
  ngOnDestroy(): void {
    let element = document.getElementById("contrastratioJS");
    if(element) {
      element.remove();
    }
  }

  ngOnInit() {
    
    let element = document.getElementById("contrastratioJS");
    if(element) {
      element.remove();
    }


    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/contrastratio.js';
    script.id = 'contrastratioJS';
    this.renderer.appendChild(document.body, script);

    
  }
  
}
