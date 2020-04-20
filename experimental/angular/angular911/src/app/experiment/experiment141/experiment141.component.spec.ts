import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment141Component } from './experiment141.component';

describe('Experiment141Component', () => {
  let component: Experiment141Component;
  let fixture: ComponentFixture<Experiment141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
