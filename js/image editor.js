let upload=document.getElementById("upload")
let img=document.getElementById("img")
let img_box=document.querySelector(".img_box")
let saturate=document.getElementById("saturate")
let contrast=document.getElementById("contrast")
let brightness=document.getElementById("brightness")
let sepia=document.getElementById("sepia")
let grayscale=document.getElementById("grayscale")
let blur=document.getElementById("blur")
let hue_rotate=document.getElementById("hue-rotate")
let download=document.getElementById("download")
let reset =document.getElementById("reset")
let filters=document.querySelectorAll("ul li input")



window.onload=function(){
    img_box.style.display="none"
    download.style.display="none"
    reset.style.display="none"
}
upload.onchange=function(){
    reset_val()
    img_box.style.display="block"
    download.style.display="block"
    reset.style.display="block"
    let file =new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload=function(){
        img.src=file.result

    }
}
filters.forEach(function(filter){
    filter.addEventListener("input",function(){
        img.style.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
    
    `
    })
    
})
//reset the filters
let duf_value=[]
for(let i=0;i<filters.length;i++){
    duf_value.push(filters[i].value)
}
function reset_val(){
    img.style.filter=""
    for(let i=0; i<duf_value.length;i++){
        filters[i].value=duf_value[i]
   }
}

reset.onclick=function(){
    reset_val()
}
//download the image
download.onclick=function(){
    download.href=img.src
}