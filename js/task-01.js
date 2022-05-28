const categoriesListRef = document.querySelector("#categories");
const categoryItemRef = categoriesListRef.querySelectorAll(".item");

console.log("Number of categories: " + categoriesListRef.children.length);

for (let i = 0; i < categoriesListRef.children.length; i += 1) {
  console.dir("Category: " + categoryItemRef[i].children[0].textContent);
  console.dir("Elements: " + categoryItemRef[i].children[1].children.length);
}
