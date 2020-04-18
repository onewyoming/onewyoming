import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment984Component } from './experiment984.component';

describe('Experiment984Component', () => {
  let component: Experiment984Component;
  let fixture: ComponentFixture<Experiment984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
