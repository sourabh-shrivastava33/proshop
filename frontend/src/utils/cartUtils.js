const addDecimal = (num) => {
  return Number((num * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {
  //   calculate item price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
  );
  //   calculate shipping price
  state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);
  //   calculate tax price
  state.taxPrice = addDecimal(Number((state.itemsPrice * 0.15).toFixed(2)));
  //   calculate total price
  state.totalPrice = addDecimal(
    (
      Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
    ).toFixed(2)
  );
  localStorage.setItem("cart", JSON.stringify(state));
};
