function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    msg.innerHTML = `Agora são ${hora} horas`;
     if(hora >= 0 && hora < 12){
        img.src = "imgs/1.png"
        document.body.style.background = '#F7CF07'
     }else if (hora >=12 && hora <=18 ) {
        img.src = "imgs/2.png"
        document.body.style.background = '#078EF7'

     }else{
        img.src = "imgs/3.png"
        document.body.style.background = '#8E07F7'
     }
}