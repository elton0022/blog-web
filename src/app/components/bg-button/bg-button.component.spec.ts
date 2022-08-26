import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgButtonComponent } from './bg-button.component';

describe('BgButtonComponent', () => {
  let component: BgButtonComponent;
  let fixture: ComponentFixture<BgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
