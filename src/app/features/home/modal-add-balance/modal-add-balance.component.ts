import { ValueFromModal } from './../../types/valueFromModal';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-balance',
  templateUrl: './modal-add-balance.component.html',
  styleUrls: ['./modal-add-balance.component.scss'],
})
export class ModalAddBalanceComponent implements OnInit {
  @Input() type: string;

  public label: string;
  public isBalance = false;

  public modalForm = this.fb.group({
    value: ['', [Validators.required, Validators.minLength(1)]],
    motivationOfWithdrawal: ['', [Validators.required]],
    createdAt: [''],
    isBalance: [''],
  });

  constructor(
    public modalController: ModalController,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.type === 'balance') {
      this.label = 'Insert your Balance';
      this.isBalance = true;
    } else {
      this.label = 'Insert your Budget';
      this.isBalance = false;
    }
  }

  public submitForm(): void {
    let response: ValueFromModal;
    if (this.modalForm.valid) {
      this.modalForm.controls.isBalance.setValue(this.isBalance);
      this.modalForm.controls.createdAt.setValue(new Date().toDateString());
      if (!this.isBalance) {
        response = this.modalForm.value;
        this.dismiss(response);
      }
    } else if (this.modalForm.get('value').valid && this.isBalance) {
      this.modalForm.controls.isBalance.setValue(this.isBalance);
      this.modalForm.controls.createdAt.setValue(new Date().toDateString());
      response = {
        value: this.modalForm.get('value').value,
        createdAt: this.modalForm.get('createdAt').value,
        isBalance: this.modalForm.get('isBalance').value,
      };
      this.dismiss(response);
    }
  }

  public dismiss(value?: ValueFromModal) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss(value);
  }
}
