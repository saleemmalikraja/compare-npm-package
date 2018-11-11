import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmBoardComponent } from './npm-board.component';

describe('NpmBoardComponent', () => {
  let component: NpmBoardComponent;
  let fixture: ComponentFixture<NpmBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
