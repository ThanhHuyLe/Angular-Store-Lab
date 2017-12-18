import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product',
  template: `
    <div>
      <ul>
        <li *ngFor="let product of products" (click)="selectedProduct = product">
          {{product.id}} - {{product.name}}
        </li>
      </ul>
    </div>

    <product-detail [product] = "selectProduct" (deleteProduct) = "delete($event)">
    </product-detail>`,
  styles: ['div { border: 3px solid blue; } li']
})

export class ProductsComponent implements OnInit {
  products: Product[];
  selectProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  delete(product: Product) {
    const index = this.products.indexOf(product);
    if(index !== -1) {
      this.products.splice(index, 1);
    }
  }
  
}
