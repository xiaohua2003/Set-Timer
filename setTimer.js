function startTimer(callback, interval){
    setInterval(function() {
      for (var counter=1; counter<6;counter++){
       callback(counter)
      }
    }, interval)}
    
    function callback(counter){
      console.log(counter)
      return counter<5
    }
    startTimer(callback,50)