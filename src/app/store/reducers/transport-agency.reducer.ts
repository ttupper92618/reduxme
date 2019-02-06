import * as transportAgencyActions from '../actions/transport-agency.actions';

export interface State {
  transportAgencyState?: string;
}

export const initialState: State = {
  transportAgencyState: null
};

export function reducer(state = initialState, action: transportAgencyActions.TransportAgencyActions): State {
  switch (action.type) {

    case transportAgencyActions.TransportAgencyActionTypes.SetTransportAgency:
      return handleSetTransportAgencyState(state, action);

    default:
      return state;
  }
}


function handleSetTransportAgencyState(state: State, action: transportAgencyActions.SetTransportAgency): State {
  return {
    ...state,
    transportAgencyState: action.payload
  };
}