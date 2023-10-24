import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupapasswordComponent } from './lupapassword.component';

describe('LupapasswordComponent', () => {
  let component: LupapasswordComponent;
  let fixture: ComponentFixture<LupapasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LupapasswordComponent]
    });
    fixture = TestBed.createComponent(LupapasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
