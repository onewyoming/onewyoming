import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment568Component } from './experiment568.component';

describe('Experiment568Component', () => {
  let component: Experiment568Component;
  let fixture: ComponentFixture<Experiment568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
