import {PLAYER_ACTION_TYPES} from '../../customReducers/player/types/types';
import {OnPress} from '../../DispalyTenBestScore/types/types';
export type UseResetGame = (
  dispatch: React.Dispatch<{
    type: PLAYER_ACTION_TYPES.PLAYER_RESET;
  }>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setMs: React.Dispatch<React.SetStateAction<number>>,
) => [OnPress, OnPress];
