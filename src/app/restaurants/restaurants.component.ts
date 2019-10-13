import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from './restaurants.service';
import {Restaurant} from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant [];

  /* Colocando public ou private num argumento do construtor,
  o TS automaticamente cria um atriuto e já atribui o valor a ele */
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
