import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromBalastControl from './balast-control.reducer';
import * as fromPropulsion from './propulsion.reducer';
import * as fromDestination from './destination.reducer';
import * as fromTransportAgency from './transport-agency.reducer';
import * as fromCrew from './crew.reducer';
import * as fromWeaponsCompliment from './weapons-compliment.reducer';

export interface State {

  balastControl: fromBalastControl.State;
  propulsion: fromPropulsion.State;
  destination: fromDestination.State;
  transportAgency: fromTransportAgency.State;
  crew: fromCrew.State;
  weaponsCompliment: fromWeaponsCompliment.State;
}

export const reducers: ActionReducerMap<State> = {

  balastControl: fromBalastControl.reducer,
  propulsion: fromPropulsion.reducer,
  destination: fromDestination.reducer,
  transportAgency: fromTransportAgency.reducer,
  crew: fromCrew.reducer,
  weaponsCompliment: fromWeaponsCompliment.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
