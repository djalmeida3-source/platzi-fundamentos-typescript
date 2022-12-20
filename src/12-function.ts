(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes,
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const prodct1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(prodct1);
  console.log(prodct1.title);
  console.log(prodct1.stock);
  console.log(prodct1.size);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const prodct2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(prodct2);
  console.log(prodct2.title);
  console.log(prodct2.stock);
  console.log(prodct2.size);
})()
