import "../scss/main.scss";

const skillLabels = document.querySelectorAll(".skills__tab-label--js");
const skillLists = document.querySelectorAll(".skills__list--js");

const toggleListPicker = (picker) => {
  skillLabels.forEach((label) => {
    label.classList.remove("skills__tab-label--selected");
  });
  picker.classList.add("skills__tab-label--selected");
};

const toggleListVisibility = (idPrefix) => {
  skillLists.forEach((list) => {
    list.classList.add("skills__list--hidden");
  });
  let visibleList = document.querySelector(`#${idPrefix}-list--js`);
  visibleList.classList.remove("skills__list--hidden");
};

skillLabels.forEach((el) => {
  el.addEventListener("click", (e) => {
    toggleListPicker(el);
    toggleListVisibility(el.htmlFor);
  });
});
