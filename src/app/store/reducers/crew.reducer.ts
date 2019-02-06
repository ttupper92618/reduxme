import { CrewState } from '../../content/content.component.models';

import * as crewActions from '../actions/crew.actions';

export interface State {
  crewState?: CrewState;
}

export const initialState: State = {
  crewState: null
};

export function reducer(state = initialState, action: crewActions.CrewActions): State {
  switch (action.type) {

    case crewActions.CrewActionTypes.SetCrew:
      return handleSetCrewState(state, action);

    default:
      return state;
  }
}

function handleSetCrewState(state: State, action: crewActions.SetCrew): State {
  return {
    ...state,
    crewState: action.payload
  };
}