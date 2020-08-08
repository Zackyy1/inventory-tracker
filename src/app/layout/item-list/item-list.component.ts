import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import { Observable } from 'rxjs';
import { FsService } from 'src/app/shared/fs.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {

  NEW_ITEM_BUTTON: string = '[data-js-add-new-item]';
  ADD_ITEM_OVERLAY: string = '[data-js-add-item-overlay]';
  items: Observable<any[]>;

  constructor(private fs: FsService) {
    this.items = fs.items;
  }
   

  ngOnInit(): void {
    this.initAddNewItemButton();
  }


  initAddNewItemButton = () => {
    $(this.NEW_ITEM_BUTTON).on('click', e => {
      $(this.ADD_ITEM_OVERLAY).removeClass('hidden');
    })
  }

}
