import { Action } from '@ngrx/store';

export enum BalastControlActionTypes {
  LoadBalastControl = '[BalastControl] Load BalastControl',
  SetDestination = '[BalastControl] Set BalastControl' 
}

export class LoadBalastControl implements Action {
  readonly type = BalastControlActionTypes.LoadBalastControl;
}

export class SetBalastControl implements Action {
  readonly type = BalastControlActionTypes.SetDestination;
  constructor(public payload: string) {}
}

export type BalastControlActions = LoadBalastControl | SetBalastControl;
