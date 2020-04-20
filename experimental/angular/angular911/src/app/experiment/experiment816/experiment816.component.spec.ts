import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment816Component } from './experiment816.component';

describe('Experiment816Component', () => {
  let component: Experiment816Component;
  let fixture: ComponentFixture<Experiment816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
