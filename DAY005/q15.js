import { guestList } from "./q14.js";
let replacingFreind = guestList.splice(1, 1, "Wahab");
for (const newInvitations of guestList)
    console.log(newInvitations);
let guestList2 = guestList;
export { guestList2 };
