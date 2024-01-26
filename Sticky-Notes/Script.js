let ctextarea = document.querySelector('.text-area').children;
let cbtn = document.querySelector('#btn');

let color_input = ctextarea[1];
color_input.value="#00ff00";

cbtn.addEventListener("click",()=>{
    addNotes(ctextarea[0].value,color_input.value);

    ctextarea[0].value="";

    removeNotes();
})

 let rightdiv = document.querySelector(".mynotes");

let addNotes = (text,color)=>{

    mydiv = document.createElement("div");
    mydiv.innerHTML=`<p>${text}</p><button class="btndlt">delete</button>`;
    mydiv.style.backgroundColor = `${color}`;
    rightdiv.appendChild(mydiv);
    
}


let removeNotes = ()=>{

    let btn = document.querySelector(".btndlt");
    
    btn.forEach((value)=>{
       value.addEventListener("click",()=>{
        value.parentElement.remove();
       })
    });

}