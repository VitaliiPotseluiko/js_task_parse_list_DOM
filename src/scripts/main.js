'use strict';

const dataSet = document.querySelector('ul');

const people = getEmploees(dataSet);

sortList(people);

for (let i = 0; i < people.length; i++) {
  dataSet.children[i].textContent = people[i].fullName;
  dataSet.children[i].dataset.position = people[i].position;
  dataSet.children[i].dataset.age = people[i].age;
  dataSet.children[i].dataset.salary = convertToString(people[i].salary);
}

function getEmploees(list) {
  const items = document.querySelectorAll('li');

  const employees = [];

  items.forEach((item) => {
    const employee = {
      fullName: item.textContent.trim(),
      position: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: Number(item.dataset.age),
    };

    employees.push(employee);
  });

  return employees;
}

function convertToNumber(string) {
  let salary = string.replace('$', '');

  salary = salary.replace(',', '');

  return Number(salary);
}

function convertToString(number) {
  return `$${number.toLocaleString('en-US')}`;
}

function sortList(list) {
  list.sort((e1, e2) => e2.salary - e1.salary);
}
