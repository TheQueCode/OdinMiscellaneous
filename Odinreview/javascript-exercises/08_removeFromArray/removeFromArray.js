const removeFromArray = function (arr, ...toRemove)
{
  const newArr = [];
  arr.forEach((item) =>
  {
    if (!toRemove.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};



// Do not edit below this line
module.exports = removeFromArray;
