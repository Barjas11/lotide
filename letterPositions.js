const letterPositions = function(sentence) {
  const results = {};

  sentence.split("").forEach(value => {
    results[value] = [];
  });

  let text = "";
    for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]].push(i);
  }

  return results;
};

console.log(letterPositions("hello"));