import "../scss/main.scss";

const skillLabels = document.querySelectorAll(".skills__tab-label--js");
const skillLists = document.querySelectorAll(".skills__list--js");
const skillListSelect = document.querySelector(".skills__select--js");

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

const changeListSelectValue = (newValue) => {
  skillListSelect.value = newValue;
};

skillLabels.forEach((el) => {
  el.addEventListener("click", (e) => {
    toggleListPicker(el);
    toggleListVisibility(el.htmlFor);
    changeListSelectValue(el.htmlFor);
  });
});

skillListSelect.addEventListener("change", (e) => {
  let skillsListPicker = document.querySelector(
    `label[for="${e.target.value}"]`
  );
  toggleListPicker(skillsListPicker);
  toggleListVisibility(e.target.value);
});
