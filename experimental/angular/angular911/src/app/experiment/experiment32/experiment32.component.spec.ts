import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment32Component } from './experiment32.component';

describe('Experiment32Component', () => {
  let component: Experiment32Component;
  let fixture: ComponentFixture<Experiment32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
