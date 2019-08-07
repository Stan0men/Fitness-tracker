import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttentTrainingComponent } from './cuttent-training.component';

describe('CuttentTrainingComponent', () => {
  let component: CuttentTrainingComponent;
  let fixture: ComponentFixture<CuttentTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttentTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
