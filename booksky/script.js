var popoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpop=document.getElementById("add-popup")

addpop.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancelpopup")
cancelbutton.addEventListener("click",function(event)
{
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"
})
 
var container= document.querySelector(".container")
var addbutton=document.getElementById("addbook")
var booktitle1=document.getElementById("bookt")
var bookauthor=document.getElementById("booka")
var description=document.getElementById("book-description")

addbutton.addEventListener("click",function(event)
{   event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle1.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${description.value}</p>
       <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}