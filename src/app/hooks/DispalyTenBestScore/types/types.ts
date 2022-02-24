import {GestureResponderEvent} from 'react-native';
import {User} from '../../../redux/types/types';

export type Ui = ({item}: {item: User}) => JSX.Element;
export type OnPressEvent = (event: GestureResponderEvent) => void;
export type OnPress = () => void;
export type RenderUi = () => JSX.Element;
