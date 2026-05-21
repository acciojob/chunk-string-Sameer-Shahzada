function stringChop(str, size) {

  // If string is null
  if (str == null) {
    return [];
  }

  size = Number(size);

  let result = [];

  // Create chunks
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");

alert(stringChop(str, size));