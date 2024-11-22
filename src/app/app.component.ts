// Importing necessary Angular modules and components
import { Component } from '@angular/core';  // Import the base Component decorator
import { CommonModule } from '@angular/common';  // Import CommonModule to access Angular common directives like ngIf, ngFor, etc.
import { RouterOutlet } from '@angular/router';  // Import RouterOutlet to handle dynamic component loading based on routing
import { HeaderComponent } from './components/layout/header/header.component';  // Import the Header component
import { AsideComponent } from './components/layout/aside/aside.component';  // Import the Aside (sidebar) component
import { ContentComponent } from './components/layout/content/content.component';  // Import the Content component
import { FooterComponent } from './components/layout/footer/footer.component';  // Import the Footer component

@Component({
  // The selector defines the tag that will be used to render this component in HTML
  selector: 'app-root',  
  // Mark this component as standalone, meaning it doesn't require a parent module
  standalone: true,
  // Import necessary modules and components for this component to work
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    AsideComponent, 
    ContentComponent, 
    FooterComponent
  ],
  // Specify the path to the HTML template for this component
  templateUrl: './app.component.html',
  // Specify the path to the CSS file for this component
  styleUrls: ['./app.component.css']  // Note: changed styleUrl to styleUrls (plural) to reflect correct syntax
})
export class AppComponent {
  // Define a title property that can be used in the template (though not yet used)
  title = 'frontend-Bank';  // Title of the application
}
