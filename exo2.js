

let div = document.querySelector(".square")

let text = document.querySelector("button")

window.addEventListener("click", function (event) {

    if (event.target === text) {
        div.style.color = "black"
    document.body.style.backgroundColor = "silver"
    div.style.backgroundColor = "white"
}  else{
    div.style.color ="white"
    document.body.style.backgroundColor ="white"
}
            })

