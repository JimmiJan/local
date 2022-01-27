const Pass = (f) => {

    if (f.className == "fas fa-eye pass") {
        password.type = "text"
        f.className = "fas fa-eye-slash pass"

    } else {
        password.type = "password"
        f.className = "fas fa-eye pass"
    }

    

}





const names= document.getElementById("name")
const lName = document.getElementById("lName")
const email = document.getElementById("email")
const pass = document.getElementById("password")


const para = () => {
    console.log(names.value)
    console.log(lName.value)
    console.log(email.value)
    console.log(pass.value)

    const bj = {
        names: names.value,
        names: lName.value,
        email: email.value,
        password: pass.value,
    }

    const user = JSON.parse(localStorage.getItem("users")) || []
    console.log(user)

    const userIndex = user.findIndex((value) => {
        return value.email === bj.email
    })
    console.log(userIndex);
    if (userIndex === -1) {
        user.push(bj)
        localStorage.setItem("u", JSON.stringify(user))
        alert("signup Form")
        window.location.assign("./login.html")

    } else {
        alert("Alredy email")
    }



}


const log = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const Data = JSON.parse(localStorage.getItem("u"))
    console.log(Data)
    const check = Data.find((value) => {
        return value.email === email.value && value.password === password.value
    })

    console.log(check);
    if (check) {
        localStorage.setItem("currentUser", JSON.stringify(check))
        alert("login")
    } else {
        alert("invalid")
    }

}








































// const para = () =>{
//     console.log(names.value);
//     console.log(lName.value);
//     console.log(email.value);
//     console.log(pass.value);

//     const user = {
//         Name : names.value,
//         lName : lName.value,
//         email: email.value,
//         pass : pass.value
//     }
    
    
//     const get = JSON.parse(localStorage.getItem("gets")) || []
    
//     // console.log(get)
//     const use = get.findIndex((value,ddn) => {
//          return value.email === user.email
//     })
//     console.log(use);
//     if(use === -1){
//      get.push(user)
//      localStorage.setItem("mian",JSON.stringify(get))
//      alert("User Sign Up successfully")
//      window.location.assign("./login.html")
//     }else{
//         alert("Please Add Correct Email Address")
//     }
    



// }



// const log =()=>{
//        const  email = document.getElementById("email")
//       const password = document.getElementById("password")
//       const data = JSON.parse(localStorage.getItem("mian"))   
//       console.log(data)
//     const checkdata =data.find((value)=>{
//         return value.email === email.value &&  value.password === password.value
//     })
//     console.log(checkdata)
//     if(data){
//         localStorage.setItem("curuntuser",JSON.stringify(checkdata))
//         alert("login Compelte")
//     }else{
//         alert("Try Again")
//     }


// }



































// const para = (e) => {
//     if (names.value < 3) {
//         alert("please enter name")
//     } else {
       
//         localStorage.setItem("myName", names.value)
       
//         localStorage.setItem("email", email.value)
//         localStorage.setItem("pass", password.value)
         
//         window.location.assign("")

//     }

// }

// const clss = document.getElementById("clss")
// const clas = document.getElementById("clas")
// const cla = document.getElementById("cla")

// const geValue = () => {
//         const value = localStorage.getItem("myName")
//         const value2 = localStorage.getItem("email")
//         const value3 = localStorage.getItem("email")
    
//         console.log(value)
    
//         clss.innerHTML = value
//         clas.innerHTML = value2
//         clas.innerHTML = value3
//     }







