import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessRegisterIndividualComponent } from './acess-register-individual.component';

describe('AcessRegisterIndividualComponent', () => {
  let component: AcessRegisterIndividualComponent;
  let fixture: ComponentFixture<AcessRegisterIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessRegisterIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessRegisterIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
