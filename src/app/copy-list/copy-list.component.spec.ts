import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyListComponent } from './copy-list.component';

describe('CopyListComponent', () => {
  let component: CopyListComponent;
  let fixture: ComponentFixture<CopyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
