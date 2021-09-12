import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-balance',
  templateUrl: './modal-add-balance.component.html',
  styleUrls: ['./modal-add-balance.component.scss']
})
export class ModalAddBalanceComponent implements OnInit {

  @Input() type: string;
  @Output() value: number;
  public label: string;

  constructor(public modalController: ModalController) { }

  ngOnInit(): void {
    if(this.type === 'balance') {
      this.label = 'Insert your Balance';
    } else {
      this.label = 'Insert your Budget';
    }
  }

  public dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
