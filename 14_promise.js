

function myOwnSetTimeout(print, duration){
    setTimeout(print, duration)
}

    // myOwnSetTimeout(function  print(){
    //     console.log("after settimeout");
    // }, 3000)

function promisemyOwnSetTimeout(duration){
      const p = new Promise(function(resolve){
         setTimeout(resolve,duration)
      })
      return p
    }

    // const ans = promisemyOwnSetTimeout(1000)
    // ans.then(function(){
    //     console.log("timeout done");
    // })


let n = new Promise(function(resolve, reject){
    let x =true
    if(x !=true){
        console.log("promise done");
    }
    else{
        console.log("Something went wrong");
    }
    resolve()
    reject()
})

 n.then().catch()