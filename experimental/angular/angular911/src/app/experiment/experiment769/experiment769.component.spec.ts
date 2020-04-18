import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment769Component } from './experiment769.component';

describe('Experiment769Component', () => {
  let component: Experiment769Component;
  let fixture: ComponentFixture<Experiment769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
