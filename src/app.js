const itemName = "Notebook";
const price = 12.5;
let quantity = 3;

console.log(typeof itemName);
console.log(typeof price);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

quantity = 4;
console.log("Quantity is now", quantity);

const subtotal = price * quantity;
const tax = subtotal * 0.08;
const total = subtotal + tax;
console.log(`${itemName}: $${total.toFixed(2)}`);

const input = "42";
const converted = Number(input);
console.log(Number.isFinite(converted));
console.log(Number.isFinite(Number("abc")));

// Logic challenge 1: minutes to hours
const minutes = 137;
const hours = Math.floor(minutes / 60);
const remaining = minutes % 60;
console.log(`${hours} hours and ${remaining} minutes`);

const hours2 = (minutes - (minutes % 60)) / 60;
console.log(`${hours2} hours and ${remaining} minutes`);



function getDiscountedTotal(total, member) {
  if (!Number.isFinite(total) || total < 0) return null;
  if (member && total >= 50) return total * 0.9;
  return total;
}
console.log(getDiscountedTotal(49.99, true));   // member, just under 50
console.log(getDiscountedTotal(50, true));      // member, exactly 50
console.log(getDiscountedTotal(80, false));     // non-member
console.log(getDiscountedTotal(80, true));      // member
console.log(getDiscountedTotal(-5, true));      // invalid
function gradeLabel(score) {
  // A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60
  // return "Invalid" if score is below 0 or above 100
}

function gradeLabel(score) {
  if (score < 0 || score > 100) return "Invalid";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(gradeLabel(89));   // B
console.log(gradeLabel(90));   // A
console.log(gradeLabel(0));    // F
console.log(gradeLabel(100));  // A
console.log(gradeLabel(-1));   // Invalid
console.log(gradeLabel(101));  // Invalid