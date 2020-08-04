import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ItemListComponent } from './layout/item-list/item-list.component';
import { ItemDetailComponent } from './layout/item-detail/item-detail.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ItemEditPageComponent } from './layout/item-edit-page/item-edit-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ItemAddPageComponent } from './layout/item-add-page/item-add-page.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemListComponent,
    ItemDetailComponent,
    SidebarComponent,
    ItemEditPageComponent,
    FooterComponent,
    ItemAddPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
