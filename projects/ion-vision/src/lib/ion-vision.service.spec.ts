import { TestBed } from '@angular/core/testing';

import { IonVisionService } from './ion-vision.service';

describe('IonVisionService', () => {
  let service: IonVisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonVisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
