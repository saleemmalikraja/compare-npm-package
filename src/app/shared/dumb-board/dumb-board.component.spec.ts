import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbBoardComponent } from './dumb-board.component';

describe('DumbBoardComponent', () => {
  let component: DumbBoardComponent;
  let fixture: ComponentFixture<DumbBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
