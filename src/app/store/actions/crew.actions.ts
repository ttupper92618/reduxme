import { Action } from '@ngrx/store';
import { CrewState } from '../../content/content.component.models'

export enum CrewActionTypes {
  LoadCrew = '[Crew] Load Crew',
  SetCrew = '[Crew] Set Crew'
}

export class LoadCrew implements Action {
  readonly type = CrewActionTypes.LoadCrew;
}

export class SetCrew implements Action {
  readonly type = CrewActionTypes.SetCrew;
  constructor(public payload: CrewState) {}
}

export type CrewActions = LoadCrew | SetCrew;
