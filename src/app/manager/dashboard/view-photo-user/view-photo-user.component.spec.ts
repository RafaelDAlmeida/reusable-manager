import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhotoUserComponent } from './view-photo-user.component';

describe('ViewPhotoUserComponent', () => {
  let component: ViewPhotoUserComponent;
  let fixture: ComponentFixture<ViewPhotoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPhotoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPhotoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
