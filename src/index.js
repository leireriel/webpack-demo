import _ from 'lodash';
import Doggy from 'doggy';

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
};

document.body.appendChild(component());
