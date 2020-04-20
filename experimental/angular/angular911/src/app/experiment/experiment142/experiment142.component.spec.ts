import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment142Component } from './experiment142.component';

describe('Experiment142Component', () => {
  let component: Experiment142Component;
  let fixture: ComponentFixture<Experiment142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
