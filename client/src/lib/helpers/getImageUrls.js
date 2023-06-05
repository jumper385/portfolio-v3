import Pocketbase from 'pocketbase'
const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

/**
 * Function to add image URLs to a specified field in a collection of items.
 * @param {any[]} collection - The collection of items.
 * @param {string} fieldName - The name of the field where image URLs will be
 *     added.
 * @param {import("pocketbase").FileQueryParams | undefined} queryParams -
 *     Optional query parameters for the file URL.
 * @return {any[]} - The new collection with updated items.
 */

export const addImageUrls = (collection, fieldName, queryParams) => {
  // Map over the collection to create a new array
  return collection.map((item) => {
    // Create a copy of the item
    let newItem = {...item};

    // If the fieldName field contains an array (i.e., "Max Files" option > 1),
    // map over this array to generate a new array of URLs.
    if (Array.isArray(newItem[fieldName])) {
      newItem[fieldName] = newItem[fieldName].map(
          (filename) => pb.getFileUrl(newItem, filename, queryParams));
    } else {
      // If the fieldName field contains a string (i.e., "Max Files" option =
      // 1), generate a single URL.
      newItem[fieldName] =
          pb.getFileUrl(newItem, newItem[fieldName], queryParams);
    }

    // Return the updated item
    return newItem;
  });
};
