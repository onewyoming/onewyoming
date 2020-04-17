import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment19Component } from './experiment19.component';

describe('Experiment19Component', () => {
  let component: Experiment19Component;
  let fixture: ComponentFixture<Experiment19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
