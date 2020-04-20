import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment158Component } from './experiment158.component';

describe('Experiment158Component', () => {
  let component: Experiment158Component;
  let fixture: ComponentFixture<Experiment158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
