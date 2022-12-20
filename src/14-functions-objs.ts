(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login('david@test.com', '123456');
  login({
    email: 'david@test.com',
    password: 123456,
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  })
  addProduct({
    title: 'Pro2',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'XL',
  })
  console.log(products);

})()
