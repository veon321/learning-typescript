const buttonElement = document.getElementById("buy");

const calculatePrice = (originalPrice, hasDiscount) => {
  return hasDiscount ? originalPrice * 0.8 : originalPrice;
};

buttonElement.addEventListener("click", () => {
  const originalPrice = 50;
  const hasDiscount = new URLSearchParams(window.location.search).get(
    "discount",
  );
  console.log(calculatePrice(originalPrice, hasDiscount));
});
