import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddBalanceComponent } from './modal-add-balance.component';

describe('ModalAddBalanceComponent', () => {
  let component: ModalAddBalanceComponent;
  let fixture: ComponentFixture<ModalAddBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
