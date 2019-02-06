import { Action } from '@ngrx/store';

export enum PropulsionActionTypes {
  LoadPropulsion = '[Propulsion] Load Propulsion',
  SetPropulsion = '[Propulsion] Set Propulsion'
}

export class LoadPropulsion implements Action {
  readonly type = PropulsionActionTypes.LoadPropulsion;
}

export class SetPropulsion implements Action {
  readonly type = PropulsionActionTypes.SetPropulsion;
  constructor(public payload: boolean) {}
}

export type PropulsionActions = LoadPropulsion | SetPropulsion;
