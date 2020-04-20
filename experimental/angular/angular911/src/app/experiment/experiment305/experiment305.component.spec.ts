import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment305Component } from './experiment305.component';

describe('Experiment305Component', () => {
  let component: Experiment305Component;
  let fixture: ComponentFixture<Experiment305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
