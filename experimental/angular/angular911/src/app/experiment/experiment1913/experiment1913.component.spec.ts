import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1913Component } from './experiment1913.component';

describe('Experiment1913Component', () => {
  let component: Experiment1913Component;
  let fixture: ComponentFixture<Experiment1913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
