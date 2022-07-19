import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageditComponent } from './pagedit.component';

describe('PageditComponent', () => {
  let component: PageditComponent;
  let fixture: ComponentFixture<PageditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
