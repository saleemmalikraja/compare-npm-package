import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmGraphComponent } from './npm-graph.component';

describe('NpmGraphComponent', () => {
  let component: NpmGraphComponent;
  let fixture: ComponentFixture<NpmGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
