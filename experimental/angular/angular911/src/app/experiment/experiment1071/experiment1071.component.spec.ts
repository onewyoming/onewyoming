import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1071Component } from './experiment1071.component';

describe('Experiment1071Component', () => {
  let component: Experiment1071Component;
  let fixture: ComponentFixture<Experiment1071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
