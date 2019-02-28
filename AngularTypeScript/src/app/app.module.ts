import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user.component";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartComponent } from './cart/cart.component';

/***
 * * Here we declare the components we want to use/include
 * * We also declare the angular modules we want to import and use in our components
 */
@NgModule({
  declarations: [AppComponent, UserComponent, UserDetailComponent, CartComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

/***
 * * Tells Angular what features the module must use.
 */
export class AppModule {}
