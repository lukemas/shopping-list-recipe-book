import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('jajuwa', 'wbic jaja i usmazyc', 'https://www.zajadam.pl/wp-content/uploads/2015/11/jajecznica-3-2-891x500.jpg' )
];

  constructor() { }

  ngOnInit() {
  }

}
