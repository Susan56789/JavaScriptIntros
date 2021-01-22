//global variables
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  //local variable
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
//scope polution. value of global variable stars was changed
console.log(callMyNightSky());
console.log(stars);
