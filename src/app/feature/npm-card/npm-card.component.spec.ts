import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmCardComponent } from './npm-card.component';

describe('NpmCardComponent', () => {
  let component: NpmCardComponent;
  let fixture: ComponentFixture<NpmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
