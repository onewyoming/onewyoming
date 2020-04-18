import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment749Component } from './experiment749.component';

describe('Experiment749Component', () => {
  let component: Experiment749Component;
  let fixture: ComponentFixture<Experiment749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
