import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({

  selector: 'product-details',
  template: `
    <div *ngIf="product">
      <form>
       <fieldset>
          <legend> Detail </legend>
          Name <input [(ngModel)]="product.name"><br>
          Price <input [(ngModel)]="product.price" [ngModelOptions]="{standalone: true}"><br>
          Description <input [(ngModel)]="product.description">
       </fieldset>
       <button (click)="requestDelete()">Delete</button>
      </form>
    </div>`

})

export class ProductDetailComponent {

  @Input()
  product: Product;

  @Output()
  deleteProduct = new EventEmitter<Product>();

  requestDelete() {
    this.deleteProduct.emit(this.product);
  }

}
