let inp = document.getElementById("input")


let but= document.querySelectorAll("button")

let str="";
let btnarry=Array.from(but)

btnarry.forEach(element => {

    element.addEventListener("click" ,(fun)=>{
        if (fun.target.innerHTML== "Dlt"){
            str=str.substring(0,str.length-1);
            inp.value=str;

        }else if(fun.target.innerHTML=="AC"){
            str=""
            inp.value=str;
        } else if(fun.target.innerHTML== "="){
            str=eval(str)
            inp.value=str;
        }

        else{
            str+= fun.target.innerHTML;
            inp.value=str;

        }
        
        
        
    })

    
});


