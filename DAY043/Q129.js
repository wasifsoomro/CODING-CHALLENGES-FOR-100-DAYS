//129
//Demostrate arrow vs traditional function
let arrowvstraditional = {
    name: "Muhammad Wasif",
    traditionalfunction: function () {
        console.log(this.name); //traditional function have own this context so the value is acessed
    },
    functionarrow: () => {
        console.log(this.name); //arrow function have not their own this context so the value maybe undefined 
    }
};
arrowvstraditional.traditionalfunction();
arrowvstraditional.functionarrow();
export {};
