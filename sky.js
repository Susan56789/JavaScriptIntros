const logSkyColor = () => {
  const dusk = true;
  let color = 'blue';
  if (dusk) {
    let color = 'pink';
    console.log(color);
  }
  console.log(color);
};

//console.log(color); // ReferenceError

logSkyColor();
