

const items = {
    "apple": 2.6,
    "banana": 1.8,
    "orange": 2,
    "Grapes": 4
};

const rupees = 80;

const convertedPrices = Object.fromEntries(
    Object.entries(items).map(([element, index]) => [element, index * rupees])
);

console.log(convertedPrices);

