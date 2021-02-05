function loadjson(file,callback){
    var ajax = new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true);
    ajax.onreadystatechange=function(){
        if(ajax.readyState ===4 && ajax.status===200){
            callback(ajax.responseText)
        }
   }
ajax.send()
}
loadjson("../json_data/data.json",function(text){   
    var d=JSON.parse(text);
    detail(d.details);
    other(d.multipledata)

});
var root=document.getElementById("root");
function detail(cse){
    console.log(cse.name);
    var n=document.createElement("h1")
    n.setAttribute("class","name")
    n.textContent=cse.name;
    root.appendChild(n);

}

function other(r){
    var u_=document.createElement("u1");
    for(let i=0; i<r.length;i++){
        var li=document.createElement("li")
        li.textContent=r[i].name
        u_.appendChild(li)

    }
root.appendChild(u_)
    
}

