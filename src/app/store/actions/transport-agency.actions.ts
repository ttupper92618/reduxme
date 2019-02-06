import { Action } from '@ngrx/store';

export enum TransportAgencyActionTypes {
  LoadTransportAgency = '[TransportAgency] Load TransportAgency',
  SetTransportAgency = '[TransportAgency] Set TransportAgency'
}

export class LoadTransportAgency implements Action {
  readonly type = TransportAgencyActionTypes.LoadTransportAgency;
}

export class SetTransportAgency implements Action {
  readonly type = TransportAgencyActionTypes.SetTransportAgency;
  constructor(public payload: string) {}
}

export type TransportAgencyActions = LoadTransportAgency | SetTransportAgency;
