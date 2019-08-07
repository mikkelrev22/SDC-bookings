const {appendFileSync} = require('fs')

function guestLimitGenerator () {
  return Math.floor(Math.random() * (20 - 2) + 2);
}

function serviceFeeGenerator () {
  return Math.floor(Math.random()* 100);
}

function taxesGenerator () {
  return parseFloat((Math.random()*30).toFixed(2));
}

function ratingGenerator () {
  return Math.floor(Math.random()*(6 - 3) + 3);
}

const table1DataGenerator = (start, end) => {
  let data1 = ''
  for (let j = start; j < end; j++) {
  data1 += `\n${j},${guestLimitGenerator()},${serviceFeeGenerator()},${taxesGenerator()},${ratingGenerator()}` 
  }
  return data1
}

// const table1Gen = (start, end) => {
//   const fields = 'id,guest_limit,service_fee,taxes,rating'
//   return fields.concat(table1DataGenerator(start, end))
// }

const appendToCSVFile = () => {
  appendFileSync(__dirname + '/rentalPriceDataTable2.csv', `${table1DataGenerator(100, 10100)}`) 
  // appendFileSync(__dirname + '/rentalPriceDataTable2.csv', `${table1DataGenerator(1000100, 2000100)}`)
  // appendFileSync(__dirname + '/rentalPriceDataTable.csv', `${table1DataGenerator(2000100, 3000100)}`)
  // appendFileSync(__dirname + '/rentalPriceDataTable.csv', `${table1DataGenerator(3000100, 4000100)}`)
  // appendFileSync(__dirname + '/rentalPriceDataTable.csv', `${table1DataGenerator(4000100, 5000100)}`)
  // appendFileSync(__dirname + '/rentalPriceDataTable.csv', `${table1DataGenerator(5000100, 6000100)}`)
  // appendFileSync(__dirname + '/rentalPriceDataTable.csv', `${table1DataGenerator(6000100, 7000100)}`)
  // appendFileSync(__dirname + '/rentalPriceDataTable.csv', `${table1DataGenerator(7000100, 8000100)}`)
  // appendFileSync(__dirname + '/rentalPriceDataTable.csv', `${table1DataGenerator(8000100, 9000100)}`)
  // appendFileSync(__dirname + '/rentalPriceDataTable.csv', `${table1DataGenerator(9000100, 10000100)}`)
}

appendToCSVFile()