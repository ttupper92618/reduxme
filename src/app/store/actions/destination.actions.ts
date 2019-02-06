import { Action } from '@ngrx/store';

export enum DestinationActionTypes {
  LoadDestination = '[Destination] Load Destinations',
  SetDestination = '[Destination] Set Destinations'
}

export class LoadDestination implements Action {
  readonly type = DestinationActionTypes.LoadDestination;
}

export class SetDestination implements Action {
  readonly type = DestinationActionTypes.SetDestination;
  constructor(public payload: string) {}
}

export type DestinationActions = LoadDestination | SetDestination;
