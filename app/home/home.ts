import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search } from '../search/search'; 
import { FoodService } from '../services/foods/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Search],  // buraya Search component eklendi
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const searchTerm = params['searchTerm'];
      const tag = params['tag'];

      if (searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(searchTerm);
      } else if (tag) {
        this.foods = this.foodService.getAllFoodsByTag(tag);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
  
}
