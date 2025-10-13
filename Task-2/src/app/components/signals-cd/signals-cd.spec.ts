import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsCd } from './signals-cd';

describe('SignalsCd', () => {
  let component: SignalsCd;
  let fixture: ComponentFixture<SignalsCd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsCd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsCd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
