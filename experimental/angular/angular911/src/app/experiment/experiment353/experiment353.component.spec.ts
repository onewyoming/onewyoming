import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment353Component } from './experiment353.component';

describe('Experiment353Component', () => {
  let component: Experiment353Component;
  let fixture: ComponentFixture<Experiment353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
