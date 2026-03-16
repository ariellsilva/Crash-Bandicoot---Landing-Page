const abrir1 = document.querySelector(".abrir1")
const abrir2 = document.querySelector(".abrir2")
const abrir3 = document.querySelector(".abrir3")
const abrir4 = document.querySelector(".abrir4")

const modal1 = document.querySelector("#modal-1")
const modal2 = document.querySelector("#modal-2")
const modal3 = document.querySelector("#modal-3")
const modal4 = document.querySelector("#modal-4")

const reduzir = document.querySelector(".fechar")
const minimizar = document.querySelector(".minimizar")
const sair = document.querySelector(".sair")
const fechando = document.querySelector(".fechando")


abrir1.onclick = function() {
   modal1.show()
}
abrir2.onclick = function(){
    modal2.show()
}
abrir3.onclick = function(){
    modal3.show()
}
abrir4.onclick = function(){
    modal4.show()
}
reduzir.onclick = function(){
    modal1.close()
}
minimizar.onclick = function(){
    modal2.close()
}
sair.onclick = function(){
    modal3.close()
}
fechando.onclick = function(){
    modal4.close()
}