const themeBtn = document.getElementById("theme-toggle");
const icon = themeBtn.querySelector("i");

// Saved Theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

// Toggle Theme
themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme","light");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme","dark");
    }

});