import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment300Component } from './experiment300.component';

describe('Experiment300Component', () => {
  let component: Experiment300Component;
  let fixture: ComponentFixture<Experiment300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
