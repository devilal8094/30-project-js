let pass = document.getElementById('password')
let msg = document.getElementById('message')
let str = document.getElementById('strenght')
let ico = document.getElementById('icon')

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none"
    }
    if(pass.value.length < 4){
        str.innerHTML = "weak";
        msg.style.color ="#ff5952"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "medium";
        msg.style.color ="yellow"
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong";
        msg.style.color ="#26d730"
    }
})

ico.addEventListener('click', () => {
    if(pass.type === 'password'){
       pass.type = 'text';
    }
    else {
       pass.type = 'password';
    }
}) 
