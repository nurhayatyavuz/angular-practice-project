import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
import { RatingModule } from 'ng-starrating';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorites: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/indir.jpg',
        tags: ['FastFood']
      },
         {
        id: 2,
        name: 'Burger',
        cookTime: '30-35',
        price: 6,
        favorites: false,
        origins: ['ABD'],
        stars: 4.5,
        imageUrl: '/assets/burger.jpg',
        tags: ['FastFood']
      },
         {
        id: 3,
        name: 'Fish',
        cookTime: '20-30',
        price: 8,
        favorites: false,
        origins: ['--'],
        stars: 4.5,
        imageUrl: '/assets/fish.jpg',
        tags: ['FastFood']
      },
         {
        id: 4,
        name: 'Wrap',
        cookTime: '10-15',
        price: 6,
        favorites: false,
        origins: ['---'],
        stars: 4.5,
        imageUrl: '/assets/wrap.jpg',
        tags: ['FastFood']
      },
       {
        id: 5,
        name: 'Fish',
        cookTime: '20-30',
        price: 8,
        favorites: false,
        origins: ['--'],
        stars: 4.5,
        imageUrl: '/assets/fish.jpg',
        tags: ['FastFood']
      },
       {
        id: 6,
        name: 'Fish',
        cookTime: '20-30',
        price: 8,
        favorites: false,
        origins: ['--'],
        stars: 4.5,
        imageUrl: '/assets/fish.jpg',
        tags: ['FastFood']
      },
       {
        id: 7,
        name: 'Fish',
        cookTime: '20-30',
        price: 8,
        favorites: false,
        origins: ['--'],
        stars: 4.5,
        imageUrl: '/assets/fish.jpg',
        tags: ['FastFood']
      },
       {
        id: 8,
        name: 'Fish',
        cookTime: '20-30',
        price: 8,
        favorites: false,
        origins: ['--'],
        stars: 4.5,
        imageUrl: '/assets/fish.jpg',
        tags: ['FastFood']
      }
    ];
  }
    getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // 🏷️ Etiket bazlı filtreleme
  getAllFoodsByTag(tag: string): Food[] {
    return this.getAll().filter(food =>
      food.tags?.includes(tag)
    );
  }
}

