import { Action } from '@ngrx/store';

import { WeaponsComplimentState } from '../../content/content.component.models'

export enum WeaponsComplimentActionTypes {
  LoadWeaponsCompliment = '[WeaponsCompliment] Load WeaponsCompliment',
  SetWeaponsCompliment = '[WeaponsCompliment] Set WeaponsCompliment'
}

export class LoadWeaponsCompliment implements Action {
  readonly type = WeaponsComplimentActionTypes.LoadWeaponsCompliment;
}

export class SetWeaponsCompliment implements Action {
  readonly type = WeaponsComplimentActionTypes.SetWeaponsCompliment;
  constructor(public payload: WeaponsComplimentState) {}
}

export type WeaponsComplimentActions = LoadWeaponsCompliment | SetWeaponsCompliment;
