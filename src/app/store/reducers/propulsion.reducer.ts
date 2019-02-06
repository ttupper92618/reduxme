import * as propulsionActions from '../actions/propulsion.actions';

export interface State {
  propulsionState?: boolean;
}

export const initialState: State = {
  propulsionState: null
};

export function reducer(state = initialState, action: propulsionActions.PropulsionActions): State {
  switch (action.type) {

    case propulsionActions.PropulsionActionTypes.SetPropulsion:
      return handleSetPropulsionState(state, action);

    default:
      return state;
  }
}

function handleSetPropulsionState(state: State, action: propulsionActions.SetPropulsion): State {
  return {
    ...state,
    propulsionState: action.payload
  };
}
