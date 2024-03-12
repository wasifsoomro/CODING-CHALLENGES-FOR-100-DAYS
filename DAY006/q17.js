import { guestList3 } from "./q16.js";
console.log("my new diiner table not arrive on time so i invite only two guest");
// Removing guest untill two guest remaining in my list
while (guestList3.length > 2) {
    let removedGuest = guestList3.pop();
    //sending message to every freind that removed
    console.log(`${removedGuest} you are not invited`);
}
// sending a meesage to freinds that are still invited
for (const stillInvited of guestList3) {
    console.log(`${stillInvited} you are still invited`);
}
