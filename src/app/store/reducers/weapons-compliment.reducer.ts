import { WeaponsComplimentState } from '../../content/content.component.models';

import * as weaponsComplimentActions from '../actions/weapons-compliment.actions';

export interface State {
  weaponsComplimentState?: WeaponsComplimentState
}

export const initialState: State = {
  weaponsComplimentState: null
};

export function reducer(state = initialState, action: weaponsComplimentActions.WeaponsComplimentActions): State {
  switch (action.type) {

    case weaponsComplimentActions.WeaponsComplimentActionTypes.SetWeaponsCompliment:
      return handleSetWeaponsCompliment(state, action);

    default:
      return state;
  }
}

function handleSetWeaponsCompliment(state: State, action: weaponsComplimentActions.SetWeaponsCompliment): State {
  return {
    ...state,
    weaponsComplimentState: action.payload
  };
}