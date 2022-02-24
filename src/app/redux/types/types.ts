//colors array
export interface Color {
  id: number;
  color: string;
  value: string;
  soundName: string;
  soundValue: string;
}
export interface Colors extends Array<Color> {}
/// enum action types

export enum DISPLAY_ACTION_TYPES {
  SET_GAME_ON = 'SET_GAME_ON',
  SET_GAME_OFF = 'SET_GAME_OFF',
}
export enum USERS_SCORES_ACTION_TYPES {
  ADD_USER_SCOR = 'ADD_USER_SCOR',
}
///action types

//winner actions
export type SetUserData = {
  type: typeof USERS_SCORES_ACTION_TYPES.ADD_USER_SCOR;
  payload: User;
};
export type WinnerAction = SetUserData;
//display action
export type SetGameOn = {
  type: typeof DISPLAY_ACTION_TYPES.SET_GAME_ON;
  payload: DisplayStateInterface;
};
export type SetGameOff = {
  type: typeof DISPLAY_ACTION_TYPES.SET_GAME_OFF;
  payload: DisplayStateInterface;
};
export type DisplayAction = SetGameOn | SetGameOff;

//initial states
export interface User {
  id: number;
  name: string;
  score: number;
}
export interface Users extends Array<User> {}

export const initialDisplayState: DisplayStateInterface = {isOn: false};
export const initialUsersScoresState: UsersScoresInterface = {
  scores: [],
};

export type UsersScoresInterface = {
  scores: Users;
};

export type DisplayStateInterface = {
  isOn: boolean;
};

export type InitialState = {
  usersScores: UsersScoresInterface;
  displayState: DisplayStateInterface;
};
