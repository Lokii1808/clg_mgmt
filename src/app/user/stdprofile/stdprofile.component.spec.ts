import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdprofileComponent } from './stdprofile.component';

describe('StdprofileComponent', () => {
  let component: StdprofileComponent;
  let fixture: ComponentFixture<StdprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdprofileComponent]
    });
    fixture = TestBed.createComponent(StdprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
