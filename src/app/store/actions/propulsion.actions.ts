import { Action } from '@ngrx/store';

export enum PropulsionActionTypes {
  LoadPropulsions = '[Propulsion] Load Propulsions',
  
  
}

export class LoadPropulsions implements Action {
  readonly type = PropulsionActionTypes.LoadPropulsions;
}


export type PropulsionActions = LoadPropulsions;
