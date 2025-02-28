import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingItemsComponent } from './listing-items.component';

describe('ListingItemsComponent', () => {
  let component: ListingItemsComponent;
  let fixture: ComponentFixture<ListingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
