import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment725Component } from './experiment725.component';

describe('Experiment725Component', () => {
  let component: Experiment725Component;
  let fixture: ComponentFixture<Experiment725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
