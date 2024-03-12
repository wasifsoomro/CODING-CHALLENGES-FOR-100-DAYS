let stageOfLife: number = 25

if(stageOfLife < 2){
    console.log("The person is baby")
} else if(stageOfLife == 2 || stageOfLife < 4){
    console.log("The prson is toddler")
} else if(stageOfLife == 4 || stageOfLife < 13){
    console.log("The prson is kid")
} else if(stageOfLife == 13 || stageOfLife < 20){
    console.log("The prson is teenager")
} else if(stageOfLife == 20 || stageOfLife < 65){
    console.log("The prson is adult")
} else if(stageOfLife >= 65){
    console.log("The prson is older")
}                
