import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateiformateComponent } from './dateiformate.component';

describe('DateiformateComponent', () => {
  let component: DateiformateComponent;
  let fixture: ComponentFixture<DateiformateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateiformateComponent]
    });
    fixture = TestBed.createComponent(DateiformateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
