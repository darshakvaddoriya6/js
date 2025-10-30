// const user = {
//     username : "darshak",
//     price : "999",
    
    
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`);
//     }
// }

// user.welcomeMessage()
// const web  = function() {
//     console.log(this);  
// }


const web  = () => {
    console.log(this);  
}

web()