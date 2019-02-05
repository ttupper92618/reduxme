import { Action } from '@ngrx/store';

export enum CrewActionTypes {
  LoadCrews = '[Crew] Load Crews',
  
  
}

export class LoadCrews implements Action {
  readonly type = CrewActionTypes.LoadCrews;
}


export type CrewActions = LoadCrews;
