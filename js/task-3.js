function getElementWidth(content, padding, border) {
    let contents = parseFloat(content);
    let paddings = parseFloat(padding);
    let borders = parseFloat(border);
    return contents + paddings * 2 + borders * 2;
};
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200