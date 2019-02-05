import { Action } from '@ngrx/store';

export enum WeaponsComplimentActionTypes {
  LoadWeaponsCompliments = '[WeaponsCompliment] Load WeaponsCompliments',
  
  
}

export class LoadWeaponsCompliments implements Action {
  readonly type = WeaponsComplimentActionTypes.LoadWeaponsCompliments;
}


export type WeaponsComplimentActions = LoadWeaponsCompliments;
