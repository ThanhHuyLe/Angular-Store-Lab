import { Component } from '@angular/core';
import { ProductsComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        Welcome to {{title}}!
      </h1>
      <products></products>
    </div>
  `,
  styles: []
})

export class AppComponent {
  title = 'Store';
}
