import Home from '../Screen/Home';
import GoogleLogin from '../Screen/GoogleLogin';
import QRCodeScanner from '../Screen/QRCodeScanner';

const Routes = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'GoogleLogin',
    component: GoogleLogin,
  },
  {
    name: 'QRCodeScanner',
    component: QRCodeScanner,
  },
];

export {Routes};
