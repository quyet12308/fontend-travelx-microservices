
document.addEventListener('DOMContentLoaded',  function() {
    container = document.querySelector("#container")
    url_payment_qrcode_img = sessionStorage.getItem("url_payment_qrcode_img")

    container.innerHTML = `
    
    <img src="${url_payment_qrcode_img}" alt="" >
    `
})