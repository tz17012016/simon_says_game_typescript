import {AppState} from './../app/redux/store';
import 'react-redux';

declare module 'react-redux' {
  interface DefaultRootState extends AppState {}
}
