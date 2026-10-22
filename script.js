document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll(".navbar .nav-link").forEach(link=>{link.addEventListener("click",()=>{const menu=document.getElementById("mainMenu");const collapse=bootstrap.Collapse.getInstance(menu);if(collapse)collapse.hide();});});
