/*
import { Injectable } from '@angular/core';
import { Dish } from '../menu/shared/dish';
import { DISHES } from '../menu/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}*/
/*
import { Injectable } from '@angular/core';
import { Dish } from '../menu/shared/dish';
import { DISHES } from '../menu/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return new Promise (resolve => {
      // simulate server latency with 2 sec delay
      setTimeout(() => resolve(DISHES),2000);
    });
  }

  getDish(id: string): Promise<Dish> {
    return new Promise (resolve => {
      // simulate server latency with 2 sec delay
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });

  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise (resolve => {
      // simulate server latency with 2 sec delay
      setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });

  }
}*/

import { Injectable } from '@angular/core';
import { Dish } from '../menu/shared/dish';
import { DISHES } from '../menu/shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay( 2000));

  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}