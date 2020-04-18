import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment610Component } from './experiment610.component';

describe('Experiment610Component', () => {
  let component: Experiment610Component;
  let fixture: ComponentFixture<Experiment610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
