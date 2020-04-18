import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment401Component } from './experiment401.component';

describe('Experiment401Component', () => {
  let component: Experiment401Component;
  let fixture: ComponentFixture<Experiment401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
