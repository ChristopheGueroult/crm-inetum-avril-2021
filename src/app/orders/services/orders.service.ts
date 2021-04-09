import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private collection
  private collection$ = new BehaviorSubject<Order[]>([]);
  private selectedItem$ = new BehaviorSubject<Order>(new Order());
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  private refreshCollection(id?: number): void {
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      )
      .subscribe((data) => {
        if (id) {
          this.getItemById(id).subscribe((obj) => this.selectedItem$.next(obj));
        } else {
          this.selectedItem$.next(data[0]);
        }
        this.selectedItem$.next(data[0]);
        this.collection$.next(data);
      });
  }

  // maj selectedItem
  public updateSelectedItem(item: Order): void {
    this.selectedItem$.next(item);
  }

  public get selectedItem(): BehaviorSubject<Order> {
    return this.selectedItem$;
  }

  // get collection
  public get collection(): BehaviorSubject<Order[]> {
    return this.collection$;
  }

  // set collection
  public set collection(col: BehaviorSubject<Order[]>) {
    this.collection$ = col;
  }

  // change state item
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = { ...item };
    obj.state = state;
    return this.update(new Order(obj));
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item).pipe(
      tap((data) => {
        this.refreshCollection(data.id);
      })
    );
  }

  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap((data) => {
        this.refreshCollection(data.id);
      })
    );
  }

  // delete item in collection
  public delete(id: Number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap((data) => {
        this.refreshCollection();
      })
    );
  }

  // get item by id from collection
  public getItemById(id: Number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
