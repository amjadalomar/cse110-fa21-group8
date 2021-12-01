export {
  addRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipe,
  authenticate,
  getOneRecipe,
};
// add recipe
const serverUrl = "https://devil-dishes.herokuapp.com/";
// const serverUrl = "http://localhost:3000/";

/**
 * user authentication
 * @param {String} username uername
 * @param {String} password password
 * @param {String} authType type of authentication, either register or login
 * @returns {String} Message from server, you can use this to determine whether succeeded
 */
async function authenticate(username, password, authType) {
  // set mode automatically
  const response = await fetch(serverUrl + authType, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const res = await response.text();
  console.log(res);
  return Promise.resolve(res);
}

//CRUD
/**
 * add recipe if recipe title DNE
 * @param {String} title
 * @param {String} img
 * @param {Array} ingredients
 * @returns {String} Message from server, you can use this to determine whether succeeded
 */
async function addRecipe(
  title,
  img,
  servings,
  cookTime,
  author,
  ingredients,
  instructions,
  tags
) {
  // set mode automatically
  const response = await fetch(serverUrl + "add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      img: img,
      ingredients: ingredients,
      servings: servings,
      cookTime: cookTime,
      author: author,
      instructions: instructions,
      tags: tags,
    }),
  });
  const res = await response.text();
  console.log(res);
  return Promise.resolve(res);
}

/**
 * return all recipes for a user(for now, all recipes in the db)
 * @returns {Array} an array of java objects contains all recipes
 */
async function getRecipe() {
  // set mode automatically
  const response = await fetch(serverUrl + "getAllRecipe", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });
  const res = await response.text();
  return Promise.resolve(JSON.parse(res));
}

/**
 * @param _id: id of the current recipe
 * return one recipe based on title
 * @returns {Array} an array of java object contains the recipe
 */
async function getOneRecipe(_id) {
  // set mode automatically
  console.log("entered getOneRecipe");
  const response = await fetch(serverUrl + "getRecipe", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      _id: _id,
    }),
  });
  const res = await response.text();
  return Promise.resolve(JSON.parse(res));
}

/**
 * update recipe if recipe title exists, even if nothing changed!
 * @param {String} title
 * @param {String} img
 * @param {Array} ingredients
 * @returns {String} Message from server, you can use this to determine whether succeeded
 */
async function updateRecipe(
  _id,
  title,
  img,
  servings,
  cookTime,
  author,
  ingredients,
  instructions,
  tags
) {
  // set mode automatically
  const response = await fetch(serverUrl + "update", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      _id: _id,
      title: title,
      img: img,
      ingredients: ingredients,
      servings: servings,
      cookTime: cookTime,
      author: author,
      instructions: instructions,
      tags: tags,
    }),
  });
  const res = await response.text();
  console.log(res);
  return Promise.resolve(res);
}

/**
 * delete recipe if recipe id exists, even if nothing changed!
 * @param {String} title
 * @param {String} img (optional. can leave blank)
 * @param {Array} ingredients (optional. can leave blank)
 * @returns {String} Message from server, you can use this to determine whether succeeded
 */
async function deleteRecipe(_id) {
  // set mode automatically
  console.log(_id);
  const response = await fetch(serverUrl + "delete", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      _id: _id,
    }),
  });
  const res = await response.text();
  console.log(res);
  return Promise.resolve(res);
}
