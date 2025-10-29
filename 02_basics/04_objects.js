// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "sammy@ai.com",
    fullname: {
        userfullname: {
            firstname: "darshak",
            lastname: "patel"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = Object.assign({}, obj1 ,obj2 , obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@ai.com"
    },
    {
        id: 2,
        email: "h@ai.com"
    },
    {
        id: 3,
        email: "h@ai.com"
    }
]

// users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const cource = {
    coursename: "js is hindi",
    price: "999",
    courseInstructor: "drashak"
}

const { courseInstructor: instuctor } = cource
console.log(instuctor);

