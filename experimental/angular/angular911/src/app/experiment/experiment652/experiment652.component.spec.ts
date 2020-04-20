import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment652Component } from './experiment652.component';

describe('Experiment652Component', () => {
  let component: Experiment652Component;
  let fixture: ComponentFixture<Experiment652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
