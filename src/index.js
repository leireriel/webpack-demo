import _ from 'lodash';
import Doggy from 'components/Doggy';
import printMe from 'utils/print.js';
import { cube } from 'utils/math.js';
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

const anotherComponent = () => {
  const element = document.createElement('pre');

  element.innerHTML = ['Soy otro componente', `5 al cubo es ${cube(5)}`].join(
    '\n',
  );

  return element;
};

const componentUpdated = component(); // When element changes, it produces a new appenchild
document.body.appendChild(componentUpdated);

const anotherComponentUpdated = anotherComponent();
document.body.appendChild(anotherComponentUpdated);

document.body.appendChild(Doggy());

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('modulopez 🐡:', 'Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
