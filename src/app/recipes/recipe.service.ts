import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'This is simply a test',
      'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'A test recipe 2',
      'This is simply a test',
      'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
