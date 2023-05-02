import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  constructor(private renderer: Renderer2, private router: Router) {}
  
  ngOnDestroy(): void {
    let element = document.getElementById("scriptJS");
    if(element) {
      element.remove();
    }
  }

  ngOnInit() {

    let element = document.getElementById("scriptJS");
    if(element) {
      element.remove();
    }

    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/script.js';
    script.id = 'scriptJS'
    this.renderer.appendChild(document.body, script);

    
  }
}
