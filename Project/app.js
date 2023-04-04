const price = document.getElementById("price");
price.innerHTML = 200.00;

const subTotal = document.getElementById("subtotal");
subTotal.innerHTML = 200.00;

const shipping = document.getElementById("shipping");
shipping.innerHTML = 1500.00;

const total = document.getElementById("total");
total.innerHTML = 1700;

const priceTab = document.getElementById("price-tab");  //Small screen display price tab
priceTab.innerHTML = 1700;



//price-tab small screen
const priceSmall = document.getElementById("price-small");
priceSmall.innerHTML = 200.00;

const subTotalSmall = document.getElementById("subtotal-small");
subTotalSmall.innerHTML = 200.00;

const shippingSmall = document.getElementById("shipping-small");
shippingSmall.innerHTML = 1500.00;

const totalSmall = document.getElementById("total-small");
totalSmall.innerHTML = 1700;


//show price tab when click button in small screen
const receiptTab = document.getElementById("receipt-small");
const btn = document.getElementById('price-show-btn');
const text = document.getElementById("text-order-summary")

btn.addEventListener('click', () => {
    receiptTab.classList.toggle('visibility-toggle');
    if (text.innerHTML == "Hide order summary")
        text.innerHTML = "Show order summary";

    else
        text.innerHTML = "Hide order summary";
})

//validate phone number
function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_str);
  }
  function validateForm(event) {
    var phone = document.getElementById('myform_phone').value;
    if (!validatePhoneNumber(phone)) {
  
  document.getElementById('phone_error').classList.remove('hidden');
    }
    else {

        document.getElementById('phone_error').classList.add('hidden');
            alert("validation success")
          }
          event.preventDefault();
        
}
document.getElementById('myform').addEventListener('change', validateForm);