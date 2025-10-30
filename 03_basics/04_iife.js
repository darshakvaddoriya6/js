// immediately invoked function expretions  (IIFE)


(function web(){
    console.log(`DB IS CONNECTED`);
    
})();

((name)=>{
    console.log(`DB IS CONNECTED ${name}`);
})("facebook")