const mysym = Symbol('key1')

const jsUser = {
    [mysym]: "mykey1",
    name: "darshak",
    "full name": "darshakpatel",
    age: 18,
    location: "ahmedbad",
    email: "one@gmail.com",
    isLoggedIn:  false,
    lastLoginDays: ["monday", "frinday"]
}

// console.log(jsUser[mysym]);
// console.log(jsUser["full name"])

jsUser.email = "one@ai.com"
// Object.freeze(jsUser)
jsUser.email = "one@chatgpt.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hellow js user")
}
jsUser.greetingTwo = function(){
    console.log(`hellow js user ${this.name}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())