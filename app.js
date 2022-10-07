

const btn=document.getElementById('btnGenerator')
let img=document.getElementById("myImg")
const getImgCat=()=>{
fetch("https://api.thecatapi.com/v1/images/search")
.then(response=>response.json())
.then(json=> img.src=json[0].url)
}



    btn.onclick=()=> {getImgCat()
        console.log('yay')}




