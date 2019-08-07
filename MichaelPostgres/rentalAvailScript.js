const {appendFileSync} = require('fs')

function generatePrice () {
  return Math.floor(Math.random()*1000);
}

function generateAvailability () {
  return Math.floor(Math.random()*2);
}



const table2DataGenerator = (start, end, idValue) => {
  const dayIncrement = 86400000;
  const refDate = Date.now() 
  let data2 = ''
  let idVal = idValue
  for (let j = start; j < end; j++) {
     for (let i = 0; i < 30; i++) {
        let date = new Date(refDate + dayIncrement * i).toISOString().slice(0, 10)
        data2 +=`\n${idVal+i}, ${date}, ${generatePrice()}, ${generateAvailability()}, ${generatePrice()}, ${j}`
      }
      idVal = idVal+30;
  }
  return data2
}


// const table2Gen = (start, end) => {
//   table2DataGenerator((start, end, start))
// }
const appendToCSVFile = () => { 
appendFileSync(__dirname + '/rentalAvailabilityDataTable2.csv', 'id,rental_date,price,available,views,rental_id')
for (let i = 0; i < 1; i++) {
  let bookings = table2DataGenerator((i*10000)+100, ((i+1)*10000)+100, (i*10000*30)+100)
  appendFileSync(__dirname + '/rentalAvailabilityDataTable2.csv', bookings)
}
}
appendToCSVFile()
// const appendToCSVFile = () => {
//   for (let i = 0;i < 100; i++) {
//     let bookings = table2Gen((i*100000)+100, (i*100000)+100)
//     appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', bookings) 
//   }
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(100, 1000100)}`) 
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(1000100, 2000100)}`)
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(2000100, 3000100)}`)
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(3000100, 4000100)}`)
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(4000100, 5000100)}`)
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(5000100, 6000100)}`)
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(6000100, 7000100)}`)
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(7000100, 8000100)}`)
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(8000100, 9000100)}`)
  // appendFileSync(__dirname + '/rentalAvailabilityDataTable.csv', `${table2Gen(9000100, 10000100)}`)


