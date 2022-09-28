import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaughtbuttonComponent } from './caughtbutton.component';

describe('CaughtbuttonComponent', () => {
  let component: CaughtbuttonComponent;
  let fixture: ComponentFixture<CaughtbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaughtbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaughtbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
