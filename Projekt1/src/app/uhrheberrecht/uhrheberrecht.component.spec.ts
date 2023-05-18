import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhrheberrechtComponent } from './uhrheberrecht.component';

describe('UhrheberrechtComponent', () => {
  let component: UhrheberrechtComponent;
  let fixture: ComponentFixture<UhrheberrechtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UhrheberrechtComponent]
    });
    fixture = TestBed.createComponent(UhrheberrechtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
