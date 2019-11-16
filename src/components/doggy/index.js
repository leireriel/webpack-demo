import _ from 'lodash';
import 'styles/style.css';
import Icon from 'img/icon.jpg';
import Data1 from 'data/data1.json';
import Data2 from 'data/data2.xml';

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data1, Data2);

  return element;
};

document.body.appendChild(component());
