const input_Btn=document.getElementById("input_btn");
const textEl=document.getELementbyId("lead_el"); 
let myLeads=["www.google.com", "www.yahoo.com" , "www.bing.com"];
const ulEl=document.getElementById("ul-el");
input_Btn.addEventListener("click",function(){
    myLeads.push(textEl.value);
    console.log(myLeads);
})

for(let i=0;i<myLeads.length;i++){
    ulEl.innerHTML += "<li>" +myLeads[i] +   "</li>";
}
