const delay = (seconds) => {
    return new Promise((resolve, reject) => {
        if(typeof seconds !== "number"){
            reject(
                new Error("Seconds must be number")
            )
        }
        setTimeout(resolve, seconds * 1000)
    })
}

delay(3).then(()=> console.log("three seconds"))