import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductbydateComponent } from './viewproductbydate.component';

describe('ViewproductbydateComponent', () => {
  let component: ViewproductbydateComponent;
  let fixture: ComponentFixture<ViewproductbydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewproductbydateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewproductbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
