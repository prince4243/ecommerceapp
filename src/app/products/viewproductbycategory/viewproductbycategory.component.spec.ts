import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductbycategoryComponent } from './viewproductbycategory.component';

describe('ViewproductbycategoryComponent', () => {
  let component: ViewproductbycategoryComponent;
  let fixture: ComponentFixture<ViewproductbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewproductbycategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewproductbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
