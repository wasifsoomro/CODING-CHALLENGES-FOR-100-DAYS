let current_users: string[] = ["Wasif", "Ali", "Ahmed"]

let new_users: string[] = ["Aslam", "Rafiu", "ahmed"]

/*using for each method that checks every element once to see that user is already registered or not 
and using loop that make elements case insensitive */
new_users.forEach(new_users=>{
    if(current_users.some(current_users=>current_users.toLowerCase()=== new_users.toLowerCase())){
        console.log(`${new_users} is already registerd`)
    } else {
        console.log(`${new_users} is available`)
    }
})