import { Action } from '@ngrx/store';

export enum BalastControlActionTypes {
  LoadBalastControls = '[BalastControl] Load BalastControls',
  
  
}

export class LoadBalastControls implements Action {
  readonly type = BalastControlActionTypes.LoadBalastControls;
}


export type BalastControlActions = LoadBalastControls;
