import Pocketbase from 'pocketbase'
const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

/**
 * @description The function maps over the collection and for each item in the
 * collection, it spreads the item properties and adds a new property 'cardUrl'.
 * The cardUrl is formed by appending the item id to the appendix.
 * @param {Object[]} collection
 * @param {string} appendix
 * @returns
 */
export const addCardUrl = (collection, appendix) => {
  let out =
      collection.map(item => ({...item, cardUrl: `${appendix}/${item.id}`}))
  console.log(out)
  return out;
}
