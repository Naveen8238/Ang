import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServicesService } from '../../data-services.service';

@Component({
  selector: 'app-listing-items',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './listing-items.component.html',
  styleUrl: './listing-items.component.css'
})
export class ListingItemsComponent {
  constructor(private newData:DataServicesService){}
  items:any =this.newData.data;
}
