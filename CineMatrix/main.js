// Bảng giá đang lưu bằng các biến rời rạc
let ticketPrices = [50000, 90000, 120000];

let seatMap = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

function bookSeat(row, col, ticketTypeIndex) {
    if (
        row < 0 ||
        row >= seatMap.length ||
        col < 0 ||
        col >= seatMap[0].length
    ) {
        return "Ghế không tồn tại!";
    }


    if (seatMap[row][col] === 0) {

        seatMap[row][col] = 1;

        let price = ticketPrices[ticketTypeIndex];

        return `Đặt ghế (${row}, ${col}) thành công. Giá vé: ${price} VNĐ`;

    } else {

        return "Ghế đã có người đặt!";
    }
}
