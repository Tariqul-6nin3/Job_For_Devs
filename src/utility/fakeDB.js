const addToCart = (id, quantity) => {
  let applyingJobs = {};
  const storedcart = localStorage.getItem("Applying-job");
  if (storedcart) {
    applyingJobs = JSON.parse(storedcart);
  }

  if (applyingJobs[id]) {
    alert("you have apply for this job");
  } else {
    applyingJobs[id] = quantity;
  }

  localStorage.setItem("Applying-job", JSON.stringify(applyingJobs));
};

const getItem = () => {
  let shoppingCart = {};
  const savedCart = localStorage.getItem("shopping-cart");
  if (savedCart) {
    shoppingCart = JSON.parse(savedCart);
  }
  return shoppingCart;
};
const deleteItem = () => {
  localStorage.removeItem("shopping-cart");
};
export { addToCart, getItem, deleteItem };
