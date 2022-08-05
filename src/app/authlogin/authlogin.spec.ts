import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authlogin } from './authlogin';

describe('AuthloginComponent', () => {
  let component: Authlogin;
  let fixture: ComponentFixture<Authlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Authlogin ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Authlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
