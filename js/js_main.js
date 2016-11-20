// Переменные для show/hide search popup
var button = document.querySelector(".hotel-search-button");
var searchBlock = document.querySelector(".hotel-search");
var autoFocus = searchBlock.querySelector("input[name=date-in]");

// Переменные для plus/minus buttons с проверкой введения текста и отрицательных значений
var plusButtonAdults = document.getElementById("plus-button-adults");
var minusButtonAdults = document.getElementById("minus-button-adults");
var plusButtonChild = document.getElementById("plus-button-child");
var minusButtonChild = document.getElementById("minus-button-child");
var adultsCount = document.getElementById("adults-count");
var childCount = document.getElementById("child-count");

// Часть кода для show/hide search popup
// Начало
button.addEventListener("click",function(event){
  event.preventDefault();
    if (searchBlock.classList.contains("hotel-search-show")) {
      searchBlock.classList.add("hotel-search-hide");
      setTimeout(function(event){
        searchBlock.classList.remove("hotel-search-show");
      }, 1200);
      setTimeout(function(event){
        searchBlock.classList.remove("hotel-search-hide");
      }, 1200);
    } else {
      searchBlock.classList.add("hotel-search-show");
      autoFocus.focus();
    }
});
// Конец

// Часть кода для plus/minus buttons с проверкой введения текста и отрицательных значений
// Начало
adultsCount.addEventListener("change",function(element){
  adultsCountValue = parseInt(adultsCount.value,10); //Текущее значение id="adults-count"
  adultsCount.value = adultsCountValue.replace('+', '');
  if (isNaN(adultsCountValue)) {
    adultsCount.value = 0;
  } else if (adultsCountValue < 0) {
    adultsCount.value = 0;
  }
});

childCount.addEventListener("change",function(element){
  childCountValue = parseInt(childCount.value,10); //Текущее значение id="child-count"
  if (isNaN(childCountValue)) {
    childCount.value = 0;
  } else if (childCountValue < 0) {
    childCount.value = 0;
  }
});

plusButtonAdults.addEventListener("click",function(element){
  element.preventDefault(); //Отменяем действие по умолчанию для кнопки
  adultsCountValue = parseInt(adultsCount.value,10); //Текущее значение id="adults-count"
  adultsCount.value = adultsCountValue + 1;
});

minusButtonAdults.addEventListener("click",function(element){
  element.preventDefault(); //Отменяем действие по умолчанию для кнопки
  adultsCountValue = parseInt(adultsCount.value,10); //Текущее значение id="adults-count"
    if (adultsCountValue == 0) {
      adultsCount.value = 0;
    } else {
        adultsCount.value = adultsCountValue - 1;
    }
});

plusButtonChild.addEventListener("click",function(element){
  element.preventDefault(); //Отменяем действие по умолчанию для кнопки
  childCountValue = parseInt(childCount.value,10); //Текущее значение id="child-count"
  childCount.value = childCountValue + 1;
});

minusButtonChild.addEventListener("click",function(element){
  element.preventDefault(); //Отменяем действие по умолчанию для кнопки
  childCountValue = parseInt(childCount.value,10); //Текущее значение id="adults-count"
    if (childCountValue == 0) {
      childCount.value = 0;
    } else {
        childCount.value = childCountValue - 1;
    }
});
// Конец
