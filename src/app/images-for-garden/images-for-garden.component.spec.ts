import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesForGardenComponent } from './images-for-garden.component';

describe('ImagesForGardenComponent', () => {
  let component: ImagesForGardenComponent;
  let fixture: ComponentFixture<ImagesForGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesForGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesForGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
