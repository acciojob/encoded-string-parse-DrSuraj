const parseCode = (str) => {
  // Split the input string using "000" as the separator
  const parts = str.split("000");

  // Extract firstName, lastName, and id from the parts array
  const firstName = parts[0];
  const lastName = parts[1];
  const id = parts[2];

  // Return an object with the extracted values
  return { firstName, lastName, id };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
