// Task 3.2

// Loop through all sales numbers to add them to the total
monthlySales.forEach(addToTotalSales);

// Often, developers using forEach will NOT declare the function separately; rather, they will put it right inside the call to forEach, as follows.
monthlySales2.forEach(function (value) {
  totalSales += value;
});
