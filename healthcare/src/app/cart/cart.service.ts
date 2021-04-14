import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountService } from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUpdated$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private accountService: AccountService) { }

  env = environment

  get() {
    return this.http.get(this.env.url + "Cart");
  }

  add(productID) {
    return this.http.post(this.env.url + "Cart/" + productID, {});
  }

  remove(productID) {
    return this.http.post(this.env.url + "Cart/" + productID, {});
  }

  getCartUpdates() {
    return this.cartUpdated$.asObservable();
  }

  notifyCartUpdate() {
    let val = this.cartUpdated$.getValue();
    this.cartUpdated$.next(!val);
  }
}
