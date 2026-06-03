const nestedProducts = [
    [
        { id: 1, name: "Laptop", price: 1500 },
        { id: 2, name: "Mouse", price: 20 }
    ],
    [
        { id: 3, name: "T-Shirt", price: 15 },
        { id: 4, name: "Jeans", price: 50 }
    ]
];
function flattenProducts(data) {
    return data.flat();
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];

    const left = arr.filter(item => item.price < pivot.price);
    const equal = arr.filter(item => item.price === pivot.price);
    const right = arr.filter(item => item.price > pivot.price);

    return [
        ...quickSort(left),
        ...equal,
        ...quickSort(right)
    ];
}
function binarySearchById(arr, targetId) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid].id === targetId) {
            return arr[mid];
        }

        if (arr[mid].id < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

function searchAndSortOptimized(data, keyword) {
    console.time("OptimizedProcess");

    const results = flattenProducts(data)
        .filter(product => product.name.includes(keyword));

    const sortedResults = quickSort(results);

    console.timeEnd("OptimizedProcess");

    return sortedResults;
}

const result = searchAndSortOptimized(
    nestedProducts,
    ""
);

console.log("Kết quả:", result);
const productsById = [...flattenProducts(nestedProducts)]
    .sort((a, b) => a.id - b.id);

console.log(
    "Tìm ID = 3:",
    binarySearchById(productsById, 3)
);