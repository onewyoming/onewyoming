import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment231Component } from './experiment231.component';

describe('Experiment231Component', () => {
  let component: Experiment231Component;
  let fixture: ComponentFixture<Experiment231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
