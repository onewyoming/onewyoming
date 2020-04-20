import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1837Component } from './experiment1837.component';

describe('Experiment1837Component', () => {
  let component: Experiment1837Component;
  let fixture: ComponentFixture<Experiment1837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
