import { guestList2 } from "../DAY005/q15.js";
console.log(`i found a bigger dinner table`);
// adding new guest in the beggining of array
let unshift = guestList2.unshift("Hameedullah");
// adding guest in the middle of array
let splice = guestList2.splice(2, 0, "Roshan");
//adding element in the end of array
let push = guestList2.push("Rehman");
// sending invitation to each freinds
for (const biggerInvitation of guestList2) {
    console.log(`${biggerInvitation} I invited you for dinner`);
}
let guestList3 = guestList2;
export { guestList3 };
