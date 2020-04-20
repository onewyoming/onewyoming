import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment664Component } from './experiment664.component';

describe('Experiment664Component', () => {
  let component: Experiment664Component;
  let fixture: ComponentFixture<Experiment664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
