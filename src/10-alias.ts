(() => {
  type UserID = string | number;
  let userId: UserID;

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  // Literal types
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting(111,'L');
  greeting('111','L');
})()
