const cinemaSeats = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];

const waitlistArray = ["NguyenVanA", "TranThiB"];

function bookSeat(row, col) {
    if (
        row < 0 ||
        row >= cinemaSeats.length ||
        col < 0 ||
        col >= cinemaSeats[row].length
    ) {
        return "Ghế không hợp lệ";
    }

    if (cinemaSeats[row][col] === 1) {
        return "Ghế đã được đặt";
    }

    cinemaSeats[row][col] = 1;
    return "Đặt ghế thành công";
}

function addCustomerToWaitlist(name) {
    waitlistArray.push(name);
}

// Test
console.log(bookSeat(0, 0));
console.log(bookSeat(1, 1));

addCustomerToWaitlist("LeVanC");

console.log(cinemaSeats);
console.log(waitlistArray);