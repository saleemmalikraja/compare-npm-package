import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbTabComponent } from './dumb-tab.component';

describe('DumbTabComponent', () => {
  let component: DumbTabComponent;
  let fixture: ComponentFixture<DumbTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
