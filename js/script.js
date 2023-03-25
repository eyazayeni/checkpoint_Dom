/** @format */

function adjustPrices() {
  var prices = document.querySelectorAll(".price");

  var total = 0;
  for (var i = 0; i < prices.length; i++) {
    console.log(total);
    total = total + parseInt(prices[i].innerHTML, 10);
  }
  document.querySelector("#total").innerHTML = total;
}

function addItem(item) {
  if (item === 1) {
    var el = document.querySelector("#kylie");
    el.value = parseInt(el.value, 10) + 1;
    price = parseInt(document.querySelector("#price1").innerHTML, 10);
    document.querySelector("#price1").innerHTML = price + 200;
    adjustPrices();
  } else if (item === 2) {
    var el = document.querySelector("#kylie2");
    el.value = parseInt(el.value, 10) + 1;
    price = parseInt(document.querySelector("#price2").innerHTML, 10);
    document.querySelector("#price2").innerHTML = price + 120;
    adjustPrices();
  } else if (item === 3) {
    var el = document.querySelector("#kylie3");
    el.value = parseInt(el.value, 10) + 1;
    price = parseInt(document.querySelector("#price3").innerHTML, 10);
    document.querySelector("#price3").innerHTML = price + 56;
    adjustPrices();
  } else {
    console.log("shit is happining ");
  }
}

function rmvItem(item) {
  if (item === 1) {
    var el = document.querySelector("#kylie");
    el.value = parseInt(el.value, 10) - 1;
    price = parseInt(document.querySelector("#price1").innerHTML, 10);
    document.querySelector("#price1").innerHTML = price - 200;
    adjustPrices();
  } else if (item === 2) {
    var el = document.querySelector("#kylie2");
    el.value = parseInt(el.value, 10) - 1;
    price = parseInt(document.querySelector("#price2").innerHTML, 10);
    document.querySelector("#price2").innerHTML = price - 120;
    adjustPrices();
  } else if (item === 3) {
    var el = document.querySelector("#kylie3");
    el.value = parseInt(el.value, 10) - 1;
    price = parseInt(document.querySelector("#price3").innerHTML, 10);
    document.querySelector("#price3").innerHTML = price - 56;
    adjustPrices();
  } else {
    console.log("shit is happining ");
  }
}

function removeElement(item) {
  if (item === 1) {
    var element = document.querySelector("#item1");
    window.event.preventDefault();
    element.parentNode.removeChild(element);
    console.log("item 1 removed");
    adjustPrices();
  } else if (item === 2) {
    var element = document.querySelector("#item2");
    window.event.preventDefault();
    element.parentNode.removeChild(element);
    console.log("item 1 removed");
    adjustPrices();
  } else if (item === 3) {
    var element = document.querySelector("#item3");
    window.event.preventDefault();
    element.parentNode.removeChild(element);
    console.log("item 1 removed");
    adjustPrices();
  } else {
    console.log("in else");
  }
}

function switchWishList(item) {
  window.event.preventDefault();
  if (item === 1) {
    var el = document.querySelector("#heart1").classList;
    el.toggle("redHeart");
  } else if (item === 2) {
    var el = document.querySelector("#heart2").classList;
    el.toggle("redHeart");
  } else if (item === 3) {
    var el = document.querySelector("#heart3").classList;
    el.toggle("redHeart");
  }
}
