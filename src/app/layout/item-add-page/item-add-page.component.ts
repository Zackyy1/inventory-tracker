import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import { FsService } from 'src/app/shared/fs.service';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
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
  CATEGORY_INPUT: string = '[data-js-category-input]';
  PRICE_PER_KG_INPUT: string = '[data-js-price-per-kg-input]';

  isFormValid: boolean;


  ngOnInit(): void {

    this.initButtonListeners();
    this.initFormInputListeners();
  }

  
  initButtonListeners = (): void => {
    $(this.ADD_BTN).on('click', e => {
      e.preventDefault();

      this.isFormValid = true;

      // Check if form has errors
      $(this.OVERLAY).find('input[required]').each((i: number, e: HTMLElement) => {
        if ($(e).val().length < 1) {
          $(e).addClass('form-error');
          this.isFormValid = false
        }
      })

      // If form has errors, return
      if (!this.isFormValid) {
        return
      }

      // Structure data
      let data = {
        name: $(this.NAME_INPUT).val(),
        price: $(this.PRICE_INPUT).val(),
        category: $(this.CATEGORY_INPUT).val(),
        pricePerKg: $(this.PRICE_PER_KG_INPUT).val()
      }

      console.log('Submitting data', data)
      this.fs.addNewItem(data)

      // Close modal
      $(this.OVERLAY).addClass('hidden');

    })
    $(this.CANCEL_BTN).on('click', e => {
      e.preventDefault();
      // Close modal
      $(this.OVERLAY).addClass('hidden');

    })
  }

  initFormInputListeners = (): void => {
    

    $(this.OVERLAY).find('input').on('input', e => {
      const INPUT: $.JQuery<HTMLElement> = $(e.target);
      if (INPUT.val().length < 1 && INPUT.prop('required')) {
        INPUT.addClass('form-error');
      } else {
        INPUT.removeClass('form-error');

      }

    })
  }

}
