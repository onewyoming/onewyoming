import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment797Component } from './experiment797.component';

describe('Experiment797Component', () => {
  let component: Experiment797Component;
  let fixture: ComponentFixture<Experiment797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
