//import '../../..//styles/theme.less';
import '!style-loader!css-loader!less-loader!../../Agent/Client/src/styles/theme.less';
//import '!style-loader!css-loader!sass-loader!../../Agent/Client/src/styles/layout.scss';

//import './styles/layout.scss';

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#212121'
      },
      {
        name: 'light',
        value: '#FFF'
      },
    ],
  }
}