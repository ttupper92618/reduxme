import * as destinationActions from '../actions/destination.actions';

export interface State {
  destinationState?: string;
}

export const initialState: State = {
  destinationState: null
};

export function reducer(state = initialState, action: destinationActions.DestinationActions): State {
  switch (action.type) {

    case destinationActions.DestinationActionTypes.SetDestination:
      return handleSetDestinationState(state, action);

    default:
      return state;
  }
}

function handleSetDestinationState(state: State, action: destinationActions.SetDestination): State {
  return {
    ...state,
    destinationState: action.payload
  };
}
