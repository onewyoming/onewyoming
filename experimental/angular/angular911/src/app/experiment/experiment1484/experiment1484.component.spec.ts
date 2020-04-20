import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1484Component } from './experiment1484.component';

describe('Experiment1484Component', () => {
  let component: Experiment1484Component;
  let fixture: ComponentFixture<Experiment1484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
