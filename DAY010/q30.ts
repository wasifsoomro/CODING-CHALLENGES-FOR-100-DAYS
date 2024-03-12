let users: string[]= ["Ali", "Bhalay", "Admin", "KhudaBux", "Shahmeer"]

for(const greeting of users){
    if(greeting === "Admin"){
        console.log(`Hello ${greeting} would you like to see a status report`)
    } else {
        console.log(`Hello ${greeting} thankyou for login again`)
    }
}