let textarea = document.getElementById("txtarea");

textarea.addEventListener("input",savetolocatstorage)

function  savetolocatstorage(){
        localStorage.setItem("saveItem",textarea.value);
}

if(localStorage.getItem("saveItem"))
{
    textarea.value=localStorage.getItem("saveItem");
}