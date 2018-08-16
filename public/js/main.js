//Exo 1
var input = document.getElementsByTagName("input")


var reponse1 = document.getElementById("response1")

var button = document.getElementsByTagName("button")

function addition1() {
    var valInput1 = parseFloat((input[0].value))
    var valInput2 = parseFloat((input[1].value))
    reponse1.innerText = valInput1 + valInput2

}
button[0].addEventListener("click", addition1)

// Exo 2 
var option = document.getElementById("operator")

var reponse2 = document.getElementById("response2")

function exo2() {
    var valInput3 = parseFloat(input[2].value)
    var valInput4 = parseFloat(input[3].value)
    switch (option.value) {
        case "+":
            reponse2.innerText = valInput3 + valInput4
            break;
        case "-":
            reponse2.innerText = valInput3 - valInput4
            break;
        case "*":
            reponse2.innerText = valInput3 * valInput4
            break;
        case "/":
            reponse2.innerText = valInput3 / valInput4
            break;
        default:
            console.log("Problème exo 2")
            break;
    }
}
button[1].addEventListener("click", exo2)

//Exo 3 

var reponse3 = document.getElementById("response3")
button[3].addEventListener("click", addition)
button[4].addEventListener("click", soustraction)
button[5].addEventListener("click", multiplication)
button[6].addEventListener("click", divise)

function addition() {
    var valInput5 = parseFloat(input[4].value)
    var valInput6 = parseFloat(input[5].value)
    reponse3.innerText = valInput5 + valInput6
}

function soustraction() {
    var valInput5 = parseFloat(input[4].value)
    var valInput6 = parseFloat(input[5].value)
    reponse3.innerText = valInput5 - valInput6
}

function multiplication() {
    var valInput5 = parseFloat(input[4].value)
    var valInput6 = parseFloat(input[5].value)
    reponse3.innerText = valInput5 * valInput6
}

function divise() {
    var valInput5 = parseFloat(input[4].value)
    var valInput6 = parseFloat(input[5].value)
    reponse3.innerText = valInput5 / valInput6
}

//Exo 4

// Création button chiffre
var chiffre1 = document.createElement("button")
var chiffre2 = document.createElement("button")
var chiffre3 = document.createElement("button")
var chiffre4 = document.createElement("button")
var chiffre5 = document.createElement("button")
var chiffre6 = document.createElement("button")
var chiffre7 = document.createElement("button")
var chiffre8 = document.createElement("button")
var chiffre9 = document.createElement("button")

// Création button opérateur
var operateurPlus = document.createElement("button")
var operateurMinus = document.createElement("button")
var operateurTimes = document.createElement("button")
var operateurDivide = document.createElement("button")

//Création input réponse
var chi1 = document.createElement("input")
var chi2 = document.createElement("input")
var reponse4 = document.createElement("input")
// Intégration chiffre et opérateur 
chiffre1.appendChild(document.createTextNode("1"))
chiffre2.appendChild(document.createTextNode("2"))
chiffre3.appendChild(document.createTextNode("3"))
chiffre4.appendChild(document.createTextNode("4"))
chiffre5.appendChild(document.createTextNode("5"))
chiffre6.appendChild(document.createTextNode("6"))
chiffre7.appendChild(document.createTextNode("7"))
chiffre8.appendChild(document.createTextNode("8"))
chiffre9.appendChild(document.createTextNode("9"))

operateurPlus.appendChild(document.createTextNode("+"))
operateurMinus.appendChild(document.createTextNode("-"))
operateurTimes.appendChild(document.createTextNode("*"))
operateurDivide.appendChild(document.createTextNode("/"))

// Button = valeur 
chiffre1.value = 1
chiffre2.value = 2
chiffre3.value = 3
chiffre4.value = 4
chiffre5.value = 5
chiffre6.value = 6
chiffre7.value = 7
chiffre8.value = 8
chiffre9.value = 9

chi1.defaultValue = "Chiffre 1"
chi2.defaultValue = "Chiffre 2"
reponse4.defaultValue = "Réponse"
// Intégration HTML
document.body.appendChild(chiffre1)
document.body.appendChild(chiffre2)
document.body.appendChild(chiffre3)
document.body.appendChild(chiffre4)
document.body.appendChild(chiffre5)
document.body.appendChild(chiffre6)
document.body.appendChild(chiffre7)
document.body.appendChild(chiffre8)
document.body.appendChild(chiffre9)

document.body.appendChild(operateurPlus)
document.body.appendChild(operateurMinus)
document.body.appendChild(operateurTimes)
document.body.appendChild(operateurDivide)

document.body.appendChild(chi1)
document.body.appendChild(chi2)

document.body.appendChild(reponse4)





