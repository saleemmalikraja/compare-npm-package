import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmTabComponent } from './npm-tab.component';

describe('NpmTabComponent', () => {
  let component: NpmTabComponent;
  let fixture: ComponentFixture<NpmTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
