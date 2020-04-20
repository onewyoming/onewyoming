import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment720Component } from './experiment720.component';

describe('Experiment720Component', () => {
  let component: Experiment720Component;
  let fixture: ComponentFixture<Experiment720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
