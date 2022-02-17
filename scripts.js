const api_url = 'https://fe-assignment.vaimo.net/'

async function getAPI() {
  const response = await fetch(api_url);
  const data = await response.json();

  var productName = data.product.name;
  var tags = data.product.tags;
  var rating = data.product.reviews.rating;
  var reviews = data.product.reviews.count;
  var buyers = data.product.reviews.total_buyers;
  var discount_amount = data.product.discount.amount;
  var shipping_price = data.product.shipping.method.cost.value;
  var currency_symbol = data.product.shipping.method.cost.currency.symbol;
  var acc_options1 = data.product.options['1080p'].label;
  var acc_price1 = data.product.options['1080p'].price.value;
  var acc_options2 = data.product.options['4k'].label;
  var acc_price2 = data.product.options['4k'].price.value;
  var acc_options3 = data.product.options.battery_accessories.label;
  var acc_price3 = data.product.options.battery_accessories.price.value;

  const formatToCurrency = amount => {
    return currency_symbol + amount.toFixed(2);
  }

  document.getElementById('productName').textContent = productName;
  document.getElementById('tags').textContent = tags;
  document.getElementById('rating').textContent = rating;
  document.getElementById('reviews').textContent = reviews;
  document.getElementById('buyers').textContent = buyers;
  document.getElementById('discount-amount').textContent = discount_amount;
  document.getElementById('shipping-price').textContent = formatToCurrency(shipping_price);
  document.getElementById('acc-name-1').textContent = acc_options1;
  document.getElementById('acc-price-1').textContent = formatToCurrency(acc_price1);
  document.getElementById('acc-name-2').textContent = acc_options2;
  document.getElementById('acc-price-2').textContent = formatToCurrency(acc_price2);
  document.getElementById('acc-name-3').textContent = acc_options3;
  document.getElementById('acc-price-3').textContent = formatToCurrency(acc_price3);

  var countDownDate = new Date(data.product.discount.end_date).getTime();

  var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  document.getElementById('up1').addEventListener("click", myFunction1);

  function myFunction1() {
    var numberOfOptions1 = parseInt(document.getElementById('input1').value);
    var numberOfOptions2 = parseInt(document.getElementById('input2').value);
    var numberOfOptions3 = parseInt(document.getElementById('input3').value);
    var optionsPrice1;
    var optionsPrice2;
    var optionsPrice3
    var optionsTotalPrice = 0;
    var totalPrice;

    optionsPrice1 = numberOfOptions1 * acc_price1;
    optionsPrice2 = numberOfOptions2 * acc_price2;
    optionsPrice3 = numberOfOptions3 * acc_price3;

    optionsTotalPrice = optionsPrice1 + optionsPrice2 + optionsPrice3;

    totalPrice = optionsTotalPrice + shipping_price;

    document.getElementById('options-total-price').textContent = formatToCurrency(optionsTotalPrice);
    document.getElementById('total-price').textContent = formatToCurrency(totalPrice);
  }

  document.getElementById('up2').addEventListener("click", myFunction2);

  function myFunction2() {
    var numberOfOptions1 = parseInt(document.getElementById('input1').value);
    var numberOfOptions2 = parseInt(document.getElementById('input2').value);
    var numberOfOptions3 = parseInt(document.getElementById('input3').value);
    var optionsPrice1;
    var optionsPrice2;
    var optionsPrice3
    var optionsTotalPrice = 0;
    var totalPrice;

    optionsPrice1 = numberOfOptions1 * acc_price1;
    optionsPrice2 = numberOfOptions2 * acc_price2;
    optionsPrice3 = numberOfOptions3 * acc_price3;

    optionsTotalPrice = optionsPrice1 + optionsPrice2 + optionsPrice3;

    totalPrice = optionsTotalPrice + shipping_price;

    document.getElementById('options-total-price').textContent = formatToCurrency(optionsTotalPrice);
    document.getElementById('total-price').textContent = formatToCurrency(totalPrice);
  }

  document.getElementById('up3').addEventListener("click", myFunction3);

  function myFunction3() {
    var numberOfOptions1 = parseInt(document.getElementById('input1').value);
    var numberOfOptions2 = parseInt(document.getElementById('input2').value);
    var numberOfOptions3 = parseInt(document.getElementById('input3').value);
    var optionsPrice1;
    var optionsPrice2;
    var optionsPrice3
    var optionsTotalPrice = 0;
    var totalPrice;

    optionsPrice1 = numberOfOptions1 * acc_price1;
    optionsPrice2 = numberOfOptions2 * acc_price2;
    optionsPrice3 = numberOfOptions3 * acc_price3;

    optionsTotalPrice = optionsPrice1 + optionsPrice2 + optionsPrice3;

    totalPrice = optionsTotalPrice + shipping_price;

    document.getElementById('options-total-price').textContent = formatToCurrency(optionsTotalPrice);
    document.getElementById('total-price').textContent = formatToCurrency(totalPrice);
  }

  document.getElementById('down1').addEventListener("click", myFunction4);

  function myFunction4() {
    var numberOfOptions1 = parseInt(document.getElementById('input1').value);
    var numberOfOptions2 = parseInt(document.getElementById('input2').value);
    var numberOfOptions3 = parseInt(document.getElementById('input3').value);
    var optionsPrice1;
    var optionsPrice2;
    var optionsPrice3
    var optionsTotalPrice = 0;
    var totalPrice;

    optionsPrice1 = numberOfOptions1 * acc_price1;
    optionsPrice2 = numberOfOptions2 * acc_price2;
    optionsPrice3 = numberOfOptions3 * acc_price3;

    optionsTotalPrice = optionsPrice1 + optionsPrice2 + optionsPrice3;

    totalPrice = optionsTotalPrice + shipping_price;

    document.getElementById('options-total-price').textContent = formatToCurrency(optionsTotalPrice);
    document.getElementById('total-price').textContent = formatToCurrency(totalPrice);
  }

  document.getElementById('down2').addEventListener("click", myFunction5);

  function myFunction5() {
    var numberOfOptions1 = parseInt(document.getElementById('input1').value);
    var numberOfOptions2 = parseInt(document.getElementById('input2').value);
    var numberOfOptions3 = parseInt(document.getElementById('input3').value);
    var optionsPrice1;
    var optionsPrice2;
    var optionsPrice3
    var optionsTotalPrice = 0;
    var totalPrice;

    optionsPrice1 = numberOfOptions1 * acc_price1;
    optionsPrice2 = numberOfOptions2 * acc_price2;
    optionsPrice3 = numberOfOptions3 * acc_price3;

    optionsTotalPrice = optionsPrice1 + optionsPrice2 + optionsPrice3;

    totalPrice = optionsTotalPrice + shipping_price;

    document.getElementById('options-total-price').textContent = formatToCurrency(optionsTotalPrice);
    document.getElementById('total-price').textContent = formatToCurrency(totalPrice);
  }

  document.getElementById('down3').addEventListener("click", myFunction5);

  function myFunction5() {
    var numberOfOptions1 = parseInt(document.getElementById('input1').value);
    var numberOfOptions2 = parseInt(document.getElementById('input2').value);
    var numberOfOptions3 = parseInt(document.getElementById('input3').value);
    var optionsPrice1;
    var optionsPrice2;
    var optionsPrice3
    var optionsTotalPrice = 0;
    var totalPrice;

    optionsPrice1 = numberOfOptions1 * acc_price1;
    optionsPrice2 = numberOfOptions2 * acc_price2;
    optionsPrice3 = numberOfOptions3 * acc_price3;

    optionsTotalPrice = optionsPrice1 + optionsPrice2 + optionsPrice3;

    totalPrice = optionsTotalPrice + shipping_price;

    document.getElementById('options-total-price').textContent = formatToCurrency(optionsTotalPrice);
    document.getElementById('total-price').textContent = formatToCurrency(totalPrice);
  }
}



getAPI();

var quantityInputs = document.getElementsByClassName('input')
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i]
  input.addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}
  
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
 
   value = isNaN(value) ? 0 : value;
  value++;

  input.value = value;
}
  
function decreaseCount(a, b) {
   var input = b.nextElementSibling;
   var value = parseInt(input.value, 10);
  
   if (value > 0) {
     value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
