const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const items = document.querySelectorAll('#categories .item');

items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const sublist = item.querySelector('ul');
    const itemCount = sublist.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
})