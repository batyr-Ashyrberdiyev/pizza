export const getCartItemLS = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};
