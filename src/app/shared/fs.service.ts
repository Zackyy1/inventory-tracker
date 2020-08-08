import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';

@Injectable({
  providedIn: 'root'
})
export class FsService {
  private itemsCollection: AngularFirestoreCollection;
  items: Observable<any[]>;

  
  constructor(private fs: AngularFirestore) {
    // this.items = firestore.collection('items').valueChanges();
    this.itemsCollection = fs.collection('items');
    this.items = this.itemsCollection.valueChanges();
   }


   addNewItem = (item: Object): void => {
     this.itemsCollection.add(item);
   }

}
