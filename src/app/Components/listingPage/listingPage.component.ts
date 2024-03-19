import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ListingItemsComponent } from '../listing-items/listing-items.component';

@Component({
  selector: 'app-listingPage',
  standalone: true,
  imports: [MatIconModule , CommonModule,ListingItemsComponent],
  templateUrl: './listingPage.component.html',
  styleUrl: './listingPage.component.css'
})
export class ListingComponent {
  constructor(){}
}
