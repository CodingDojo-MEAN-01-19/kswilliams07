//Promises
function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        },
        tarp: {
          product: 'A large tarp',
          directions: function() { return 'cover the floor'}
        }
      };

      if (item in warehouse) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`${item} is out of stock`));
      }

    }, deliveryTime);
  })

}

function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');
const roller = orderSupplies('roller').catch(handleError)


Promise.all([tarp,paint, brush])
  .then(function (items) {
    console.log('items', items)

    items.forEach(receivedItem);
  })
  .catch(handleError)

function handleError(error) {
  console.log(error.message);
}
