const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (i = 0; i < allItems.length; i++) {
    console.log(allItems[i]);
    if (itemsToCount[allItems[i]]) {
      if (results[allItems[i]]) {
        results[allItems[i]] += 1;
      } else {
        results[allItems[i]] = 1;
      }
    }
  }
  return results;
}


module.exports = countOnly;