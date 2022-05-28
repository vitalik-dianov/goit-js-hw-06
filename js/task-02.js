const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const createdItems = ingredients.map((ingredient) => {
  const ingItemRef = document.createElement("li");
  ingItemRef.textContent = ingredient;
  ingItemRef.classList.add("item");
  return ingItemRef;
});

ingredientsListRef.append(...createdItems);
