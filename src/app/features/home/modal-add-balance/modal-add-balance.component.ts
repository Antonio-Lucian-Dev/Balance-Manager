import { ValueFromModal } from './../../types/valueFromModal';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
    currency: ['']
  });

  constructor(
    public modalController: ModalController,
    public fb: FormBuilder,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    if (this.type === 'balance') {
      this.label = 'Insert your Balance';
      this.isBalance = true;
      this.modalForm.controls.currency.setValue('€');
    } else {
      this.label = 'Insert your Widthdrwal in currency RON';
      this.isBalance = false;
      this.modalForm.controls.currency.setValue('Ron');
    }
  }

  public submitForm(): void {
    let response: ValueFromModal;
    if (this.modalForm.valid) {
      this.modalForm.controls.isBalance.setValue(this.isBalance);
      this.modalForm.controls.createdAt.setValue(this.datepipe.transform(new Date(), 'dd/MM/yyyy, h:mm a'));
      if (!this.isBalance) {
        response = this.modalForm.value;
        this.dismiss(response);
      }
    } else if (this.modalForm.get('value').valid && this.isBalance) {
      this.modalForm.controls.isBalance.setValue(this.isBalance);
      this.modalForm.controls.createdAt.setValue(this.datepipe.transform(new Date(), 'dd/MM/yyyy, h:mm a'));
      response = {
        value: this.modalForm.get('value').value,
        createdAt: this.modalForm.get('createdAt').value,
        isBalance: this.modalForm.get('isBalance').value,
        currency: this.modalForm.get('currency').value
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
