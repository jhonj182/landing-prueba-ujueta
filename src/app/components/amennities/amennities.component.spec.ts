import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmennitiesComponent } from './amennities.component';

describe('AmennitiesComponent', () => {
  let component: AmennitiesComponent;
  let fixture: ComponentFixture<AmennitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmennitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmennitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
