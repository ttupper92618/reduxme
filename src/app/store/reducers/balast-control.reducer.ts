import * as balastControlActions from '../actions/balast-control.actions';

export interface State {
  balastControlState?: string;
}

export const initialState: State = {
  balastControlState: null
};

export function reducer(state = initialState, action: balastControlActions.BalastControlActions): State {
  switch (action.type) {

    case balastControlActions.BalastControlActionTypes.SetDestination:
    return handleSetBalastControlState(state, action);

    default:
      return state;
  }
}

function handleSetBalastControlState(state: State, action: balastControlActions.SetBalastControl): State {
  return {
    ...state,
    balastControlState: action.payload
  };
}