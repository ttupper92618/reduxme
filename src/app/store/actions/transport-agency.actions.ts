import { Action } from '@ngrx/store';

export enum TransportAgencyActionTypes {
  LoadTransportAgencys = '[TransportAgency] Load TransportAgencys',
  
  
}

export class LoadTransportAgencys implements Action {
  readonly type = TransportAgencyActionTypes.LoadTransportAgencys;
}


export type TransportAgencyActions = LoadTransportAgencys;
