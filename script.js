document.querySelector("nav").addEventListener("click" , (e)=>{if(e.target.nodeName != "I"){return} ;
let data;
switch(e.target.getAttributeNode("item-id").value){
    case "Home" : data = {Title:"Home" ,Color:"Red" , ItemId:"Home" }
    Update(data)
    history.pushState(data , "HOME" , "HOME")
        break;
        case "Search" : data = {Title:"Search" ,Color:"blue" , ItemId:"Search" }
    Update(data)
    history.pushState(data , "Search" , "Search")
        break;
        case "Likes" : data = {Title:"Likes" ,Color:"Yellow" , ItemId:"Likes" }
    Update(data)
    history.pushState(data , "Likes" , "Likes")
        break;
        case "Profiles" : data = {Title:"Profile" ,Color:"green" , ItemId:"Home" }
    Update(data)
    history.pushState(data , "Profiles" , "Profiles")
        break;

}
})
window.addEventListener("popstate" , (e)=>{
    if(history.state){Update(history.state)
    }else{history.pushState({Title:"Home" ,Color:"Red" , ItemId:"Home" })}
 })




function Update(data){
document.querySelector("h1").innerText = data.Title;
document.querySelector("main").style.backgroundColor = data.Color ;
document.querySelectorAll("i").forEach((e)=>{e.style.color = "#666"});
document.querySelector(`i[item-id =${data.ItemId} ]`).style.color = "black"
}