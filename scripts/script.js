import { dataCourses, dataTopics } from './data.js';

const coursesContainer = document.getElementById('courses-container');
const moreButton = document.getElementById('more-button');
const topicsContainer = document.getElementById('topics-container');
let amountCourses = 4;

const printCourses = (amount) => {
  let str = '';
  for (let i = 0; i < amount; i += 1) {
    str += `<div class="course">
    <h4>${dataCourses[i].title}</h4>
    <h6 class="category">${dataCourses[i].category}</h6>
    <p>${dataCourses[i].description}</p>
  </div>`;
  }
  return str;
};

const printTopics = () => {
  let str = '';
  for (let i = 0; i < dataTopics.length; i += 1) {
    str += `<div class="topic">
    <div class="image-container">
      <img src="${dataTopics[i].urlimg}">
    </div>
    <h3>${dataTopics[i].title}</h3>
    <p>${dataTopics[i].description}</p>
  </div>`;
  }
  return str;
};

coursesContainer.innerHTML = printCourses(amountCourses);
topicsContainer.innerHTML = printTopics();

moreButton.addEventListener('click', () => {
  amountCourses += 4;
  coursesContainer.innerHTML = printCourses(amountCourses);
});