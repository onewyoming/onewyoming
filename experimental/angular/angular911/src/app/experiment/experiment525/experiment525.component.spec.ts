import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment525Component } from './experiment525.component';

describe('Experiment525Component', () => {
  let component: Experiment525Component;
  let fixture: ComponentFixture<Experiment525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
