import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

export default () => {
  if (process.client) {
    Splitting();
  }
};