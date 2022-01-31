const item = document.querySelectorAll('.item');
const items = document.querySelector('.items');
const propsList = document.querySelectorAll('.props__list');
const img = document.querySelectorAll('img');
const content = document.querySelectorAll('.content');
const itemTitle = document.querySelectorAll('h2');
const propsItemFour = document.querySelectorAll('.props__item_four');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemFours = Array.from(propsItemFour);


propsItemFour.forEach(i => i.remove());
//1 element
items.append(item[1]);

//2 element

items.append(item[2]);
content[2].append(itemTitle[4]);
content[2].append(propsList[2]);
propsList[2].append(propsItemTwo[8]);
propsList[2].append(propsItemTwo[9]);


//3 element

items.append(item[3]);
propsList[3].remove();
content[3].append(itemTitle[3]);
content[3].append(propsList[4]);


//4 element

items.append(item[0])
content[0].append(propsList[0]);
[propsItemFours[3], propsItemFours[5]] = [propsItemFours[5], propsItemFours[4]];
for (let i = 0; i < 6; i++) {
    propsList[0].append(propsItemFours[i]);
}

//5 element

items.append(item[4])
content[4].append(itemTitle[5]);
content[4].append(propsList[3]);

//6 element

items.append(item[5]);
content[5].append(itemTitle[2]);
content[5].append(propsList[5]);












