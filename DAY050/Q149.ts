console.log("Start")

setTimeout(()=> {
    console.log("Print this event")  //this gets queued to be executed by the event loop
}, 0)

console.log("End") // "Print this event logs after the "End" because of event loop