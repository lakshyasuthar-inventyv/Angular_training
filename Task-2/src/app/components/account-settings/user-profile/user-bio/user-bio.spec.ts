import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBio } from './user-bio';

describe('UserBio', () => {
  let component: UserBio;
  let fixture: ComponentFixture<UserBio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
