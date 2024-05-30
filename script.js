

 const image = document.getElementById("img-qrcode");
 const link = document.getElementById("link-id");
 const button = document.getElementById("gen-btn");
 const downloadbutton = document.getElementById("dwn");
 const live = document.getElementById("live");


 function Generate (){
        if(!link.value )return alert("ADD URL FIRST")

        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link.value}`
        downloadbutton.style.display = "block"
        live.style.display = "block"
 }
 
 function downloadimg (){
    console.log(image.src);
    // downloadimg(image.src)
    downloadImage(image.src)
 }

 async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'QR Code'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

button.addEventListener("click", Generate)

downloadbutton.addEventListener("click", downloadimg)
 