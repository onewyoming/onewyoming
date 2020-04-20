import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment253Component } from './experiment253.component';

describe('Experiment253Component', () => {
  let component: Experiment253Component;
  let fixture: ComponentFixture<Experiment253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
