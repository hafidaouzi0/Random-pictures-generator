let myDog=document.getElementById("dog")
let btnDog=document.getElementById("btnGeneratord")
let imgd=document.getElementById("myImgd")

const getImgDog=()=>{
    fetch(" https://api.thedogapi.com/v1/images/search")
    .then(response=>response.json())
    .then(json=> imgd.src=json[0].url)
    }

    
btnDog.onclick=()=>{
    getImgDog()
    console.log("clicked")
}