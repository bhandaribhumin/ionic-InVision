import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonVisionComponent } from './ion-vision.component';

describe('IonVisionComponent', () => {
  let component: IonVisionComponent;
  let fixture: ComponentFixture<IonVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
