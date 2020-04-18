import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment850Component } from './experiment850.component';

describe('Experiment850Component', () => {
  let component: Experiment850Component;
  let fixture: ComponentFixture<Experiment850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
