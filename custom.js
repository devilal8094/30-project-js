document.getElementById("custom_slider").addEventListener("input",function(event){
    let value = event.target.value;
    document.getElementById("current_value").innerText = value;
    document.getElementById("current_value").classList.add("active");
    document.getElementById("current_value").style.left =`${value/2}%`;
});

document.getElementById("custom_slider").addEventListener("blur",function(event){
    document.getElementById("current_value").classList.remove("active");
})