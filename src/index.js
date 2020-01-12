import _ from 'lodash';
import Doggy from 'Doggy';
import printMe from './print.js';
import 'styles/style.scss';

const component = () => {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
};

document.body.appendChild(Doggy());

let element = component(); //When element changes, it produces a new appenchild
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('modulopez 🐡:', 'Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
