import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment606Component } from './experiment606.component';

describe('Experiment606Component', () => {
  let component: Experiment606Component;
  let fixture: ComponentFixture<Experiment606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
