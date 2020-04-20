import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment59Component } from './experiment59.component';

describe('Experiment59Component', () => {
  let component: Experiment59Component;
  let fixture: ComponentFixture<Experiment59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
