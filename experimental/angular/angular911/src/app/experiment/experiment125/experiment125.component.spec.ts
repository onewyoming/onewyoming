import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment125Component } from './experiment125.component';

describe('Experiment125Component', () => {
  let component: Experiment125Component;
  let fixture: ComponentFixture<Experiment125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
