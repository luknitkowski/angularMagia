import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlantImageComponent } from './dialog-plant-image.component';

describe('DialogPlantImageComponent', () => {
  let component: DialogPlantImageComponent;
  let fixture: ComponentFixture<DialogPlantImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPlantImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlantImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
