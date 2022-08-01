let equipo
let partidosGanados 
let partidosEmpatados 
let partidosPerdidos 
let golesFavor 
let golesContra 
function puntos(partidosGanados, partidosEmpatados, partidosPerdidos) {
    return partidosGanados*3 + partidosEmpatados*1 + partidosPerdidos
}

function difGol(golesFavor=0, golesContra=0) {
    return golesFavor - golesContra
}

do{
    equipo = prompt("Ingrese un equipo")    
    if (equipo == "") {
        alert("Ingrese un equipo para continuar")
        continue        
    } 
     partidosGanados = parseFloat(prompt("Ingrese partidos ganados"))
    if (partidosGanados<0) {
        alert("Ingrese un número válido")
        continue      
    }    
     partidosEmpatados = parseFloat(prompt("Ingrese partidos empatados"))
    if (partidosEmpatados<0){
        alert("Ingrese un número válido")
        continue 
    } 
     partidosPerdidos = parseFloat(prompt("Ingrese partidos perdidos"))
    if (partidosPerdidos<0){
        alert("Ingrese un número válido")
        continue
    } 
     golesFavor = parseFloat(prompt("Ingrese goles a favor"))
    if (golesFavor<0){
        alert("Ingrese un número válido")
        continue
    } 
     golesContra = parseFloat(prompt("Ingrese goles en contra"))
    if (golesContra<0){
        alert("Ingrese un número válido")
        continue    
    }     
}
while(isNaN(partidosGanados) || isNaN(partidosEmpatados)  ||  isNaN(partidosPerdidos)  || isNaN(golesFavor)  || isNaN(golesContra)){
    let totalPuntos = puntos(partidosGanados, partidosEmpatados, partidosPerdidos)
    let totalDifGol = difGol(golesFavor, golesContra)
    alert(equipo+'. '+totalPuntos+' Puntos. '+partidosGanados+' partidos ganados. '+partidosEmpatados+' partidos empatados. '+partidosPerdidos+' partidos perdidos. '+golesFavor+' goles a favor. '+golesContra+' goles en contra. '+totalDifGol+' goles de diferencia.')    
}
