import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment960Component } from './experiment960.component';

describe('Experiment960Component', () => {
  let component: Experiment960Component;
  let fixture: ComponentFixture<Experiment960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
