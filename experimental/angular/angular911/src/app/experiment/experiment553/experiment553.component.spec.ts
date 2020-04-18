import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment553Component } from './experiment553.component';

describe('Experiment553Component', () => {
  let component: Experiment553Component;
  let fixture: ComponentFixture<Experiment553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
