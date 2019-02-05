import { Action } from '@ngrx/store';

export enum DestinationActionTypes {
  LoadDestinations = '[Destination] Load Destinations',
  
  
}

export class LoadDestinations implements Action {
  readonly type = DestinationActionTypes.LoadDestinations;
}


export type DestinationActions = LoadDestinations;
