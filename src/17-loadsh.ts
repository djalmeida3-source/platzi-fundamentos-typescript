import _ from 'lodash';

const data = [
  {
    username: 'david',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'diego',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  },
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
