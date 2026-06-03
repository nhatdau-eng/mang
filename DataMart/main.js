const orders = [
    { id: 1, status: "Delivered", price: 100, tax: 10 },
    { id: 2, status: "Cancelled", price: 200, tax: 20 },
    { id: 3, status: "Delivered", price: 300, tax: 30 }
];

function calculateTotalRevenueLegacy(orderList) {
  return orderList 
       .filter(orderList[i].status==="Delivered")
       .map(order=>oder.price+oder.tax)
       .reduce((sum,price)=>sum + price,0);
}