const populations = {
  Berlin: '3.645',
  'New York': '8.419',
  Madrid: '3.223',
};

let containerElement = document.getElementById('container');

Object.entries(populations).forEach(([key, value]) => {
  let childElement = document.createElement('p');
  childElement.textContent = `${key}: ${value} Million`;
  containerElement.appendChild(childElement);
});
