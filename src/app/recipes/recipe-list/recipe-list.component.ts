import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('jajuwa', 'wbic jaja i usmazyc', 'https://www.zajadam.pl/wp-content/uploads/2015/11/jajecznica-3-2-891x500.jpg' ),
  new Recipe('bigos', 'posiekac kapuhe i wlozyc do gara', 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/bigos_z_kiszonej_kapusty_01_0.jpg' )
];

  constructor() { }

  ngOnInit() {
  }

}
