window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.4)";
}
else{
header.style.boxShadow = "none";
}

});

function toggleDetails(id){

const details = document.getElementById(id);

if(details.style.display === "block"){
details.style.display = "none";
}
else{
details.style.display = "block";
}

}