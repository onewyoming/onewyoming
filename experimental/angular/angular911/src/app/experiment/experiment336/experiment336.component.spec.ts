import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment336Component } from './experiment336.component';

describe('Experiment336Component', () => {
  let component: Experiment336Component;
  let fixture: ComponentFixture<Experiment336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
