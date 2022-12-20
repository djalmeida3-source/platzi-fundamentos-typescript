(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as String).toLowerCase();
  console.log(rta);

  myDynamicVar = 1213;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})()
