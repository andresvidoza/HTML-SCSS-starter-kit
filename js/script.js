let password__header__loginBtn = document.querySelector(".password__header__login");
let password__login__closeBtn = document.querySelector(".password__login__close");
let password__login = document.querySelector(".password__login");

password__header__loginBtn.addEventListener('click', function(){
    if(password__login.classList.contains("close")){
        password__login.classList.add("open")
        password__login.classList.remove("close")
    }else{
        password__login.classList.add("close")
        password__login.classList.remove("open")
    }
})

password__login__closeBtn.addEventListener('click', function(){
    if(password__login.classList.contains("close")){
        password__login.classList.add("open")
        password__login.classList.remove("close")
    }else{
        password__login.classList.add("close")
        password__login.classList.remove("open")
    }
})