(() => {
  let prices = [1,2,3,4,5,212, 'hola', true];
  // prices.push('asd');
  // prices.push(true);
  // prices.push({});
  prices.push(1234546);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,212];
  numbers.map(item => item * 2);
})()
