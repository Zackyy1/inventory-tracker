import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import { FsService } from 'src/app/shared/fs.service';
@Component({
  selector: 'app-item-add-page',
  templateUrl: './item-add-page.component.html',
  styleUrls: ['./item-add-page.component.less']
})
export class ItemAddPageComponent implements OnInit {

  constructor(private fs: FsService) { }

  ADD_BTN: string = '[data-js-add]';
  CANCEL_BTN: string = '[data-js-cancel]';
  OVERLAY: string = '[data-js-add-item-overlay]'

  NAME_INPUT: string = '[data-js-name-input]';
  PRICE_INPUT: string = '[data-js-price-input]';
  PRICE_PER_KG_INPUT: string = '[data-js-price-per-kg-input]';


  ngOnInit(): void {

    this.initButtonListeners();

  }

  initButtonListeners = () => {
    $(this.ADD_BTN).on('click', e => {
      e.preventDefault();
      // Add new item
      let name = $(this.NAME_INPUT).val();
      let price = $(this.PRICE_INPUT).val();
      let pricePerKg = $(this.PRICE_PER_KG_INPUT).val();
      this.fs.addNewItem({name, price, pricePerKg})
      
      $(this.OVERLAY).addClass('hidden');

    })
    $(this.CANCEL_BTN).on('click', e => {
      e.preventDefault();
      // Close modal
      $(this.OVERLAY).addClass('hidden');

    })
  }

}
