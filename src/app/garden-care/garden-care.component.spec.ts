import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCareComponent } from './garden-care.component';

describe('GardenCareComponent', () => {
  let component: GardenCareComponent;
  let fixture: ComponentFixture<GardenCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
