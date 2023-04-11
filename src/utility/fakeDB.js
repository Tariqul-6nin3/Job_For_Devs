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
  let applyingJobs = {};
  const savedCart = localStorage.getItem("Applying-job");
  if (savedCart) {
    applyingJobs = JSON.parse(savedCart);
  }
  return applyingJobs;
};
const deleteItem = () => {
  localStorage.removeItem("shopping-cart");
};
export { addToCart, getItem, deleteItem };
