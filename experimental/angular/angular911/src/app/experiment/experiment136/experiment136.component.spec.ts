import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment136Component } from './experiment136.component';

describe('Experiment136Component', () => {
  let component: Experiment136Component;
  let fixture: ComponentFixture<Experiment136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
