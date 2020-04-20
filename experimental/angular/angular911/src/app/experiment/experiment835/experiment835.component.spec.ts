import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment835Component } from './experiment835.component';

describe('Experiment835Component', () => {
  let component: Experiment835Component;
  let fixture: ComponentFixture<Experiment835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
