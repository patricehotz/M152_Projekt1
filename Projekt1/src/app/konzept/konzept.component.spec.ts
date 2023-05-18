import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonzeptComponent } from './konzept.component';

describe('KonzeptComponent', () => {
  let component: KonzeptComponent;
  let fixture: ComponentFixture<KonzeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KonzeptComponent]
    });
    fixture = TestBed.createComponent(KonzeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
