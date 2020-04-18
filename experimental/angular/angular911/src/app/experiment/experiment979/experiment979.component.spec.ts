import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment979Component } from './experiment979.component';

describe('Experiment979Component', () => {
  let component: Experiment979Component;
  let fixture: ComponentFixture<Experiment979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
