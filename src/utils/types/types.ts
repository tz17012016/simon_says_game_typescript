import {
  InitPlay,
  PLAYER_ACTION_TYPES,
} from '../../app/hooks/customReducers/player/types/types';
import {Color, Colors, Users} from '../../app/redux/types/types';

export type Resolve = (value: any) => void;
export type CardClickHandle = (
  color: Color,
  state: InitPlay,
  dispatch: React.Dispatch<
    | {
        type: PLAYER_ACTION_TYPES.SET_USER_COLORS;
        payload: Colors;
      }
    | {
        type: PLAYER_ACTION_TYPES.DISPLAY_ON;
      }
    | {
        type: PLAYER_ACTION_TYPES.SET_USER_PLAY_OFF;
      }
    | {
        type: PLAYER_ACTION_TYPES.SET_USER_SCORE;
        payload: InitPlay['score'];
      }
    | {
        type: PLAYER_ACTION_TYPES.SET_USER_COLORS_RESET;
      }
    | {
        type: PLAYER_ACTION_TYPES.SET_USER_FINISH_SCORE;
        payload: InitPlay['score'];
      }
  >,
  setFlashColor: React.Dispatch<React.SetStateAction<string>>,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
) => Promise<void>;
export type DisplayColors = (
  state: InitPlay,
  dispatch: React.Dispatch<
    | {
        type: PLAYER_ACTION_TYPES.SET_SIMON_COLORS;
        payload: Colors;
      }
    | {
        type: PLAYER_ACTION_TYPES.DISPLAY_OFF;
      }
    | {
        type: PLAYER_ACTION_TYPES.SET_USER_PLAY_ON;
      }
    | {
        type: PLAYER_ACTION_TYPES.SET_USER_COLORS;
        payload: Colors;
      }
  >,
  setFlashColor: React.Dispatch<React.SetStateAction<string>>,
) => Promise<void>;
export type RunSimonColors = (
  dispatch: React.Dispatch<{
    type: PLAYER_ACTION_TYPES.SET_SIMON_COLORS;
    payload: Colors;
  }>,
  state: InitPlay,
) => void;
export type GetTenBestScores = (key: string, arr: Users) => Users;
export type GetRandomColorByIndex = (arr: Colors) => Colors;
export type GetArrRevers = (arr: any) => any;

export type FindByColor = (color: Color, arr: Colors) => Color | any;
export type Timeout = (ms: number) => any;
