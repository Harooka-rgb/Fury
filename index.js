// const select = document.querySelector("select");
// const h4 = document.querySelector("h4");

// select.addEventListener("change", () => {
//     console.log(select.value);
//     if (select.value ==="RU") {
//         h4.textContent = "привет"   
//     }else if (select.value ==="KG") {
//         h4.textContent = "салам"
//     }else if (select.value ==="EN") {
//         h4.textContent = "hello"
//     }
    
// });

 const buttons = document.querySelectorAll(".buttons button");
 const contents = document.querySelectorAll(".content div");

 buttons.forEach( (btn, index) => {
        btn.addEventListener("click", () => {
            buttons.forEach(btn => { 
                btn.classList.remove("active");
            })
            contents.forEach( div => { 
                div.classList.remove("active")
    }) 
            btn.classList.add("active")
            contents[index].classList.add("active")
        })
    })