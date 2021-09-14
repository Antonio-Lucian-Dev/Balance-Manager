import { Component, Inject, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ValueFromModal } from '../../types/valueFromModal';

@Component({
  selector: 'app-modal-add-balance',
  templateUrl: './modal-add-balance.component.html',
  styleUrls: ['./modal-add-balance.component.scss']
})
export class ModalAddBalanceComponent implements OnInit {

  @Input() type: string;
  public inputValue: number;
  public label: string;
  private valueFromModal: ValueFromModal = {
    value: undefined,
    type: null
  };

  constructor(public modalController: ModalController) { }

  ngOnInit(): void {
    if(this.type === 'balance') {
      this.label = 'Insert your Balance';
    } else {
      this.label = 'Insert your Budget';
    }
  }

  public addValue(): void {
    if(this.inputValue) {
      this.valueFromModal.value = this.inputValue;
      //this.valueFromModal.value = formatNumber(this.inputValue,this.locale);
      this.valueFromModal.type = this.type;
    }
    this.dismiss(this.valueFromModal);
  }

  public dismiss(value?: ValueFromModal) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss(value);
  }

}
