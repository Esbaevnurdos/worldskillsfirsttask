const crypto = require("crypto");

function hashText(text) {
  // Create a hash object using SHA-256 algorithm
  const hash = crypto.createHash("sha256");

  // Update the hash object with the text
  hash.update(text);

  // Get the hexadecimal representation of the hash
  const hashedText = hash.digest("hex");

  return hashedText;
}

// Example usage
const text = "salemalem!";
const hashedText = hashText(text);
console.log("Hashed text:", hashedText);
