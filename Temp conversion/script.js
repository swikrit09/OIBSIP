const tempInp=document.getElementById("tempInp");
const type= document.getElementById("tempType");
const convert= document.getElementById("convert");
const result =document.getElementById("result");

const FtoC= (temp)=>{
    return (5/9)*(temp-32) +"⁰C";
}
const CtoF= (temp)=>{
    return ((9/5)*temp)+32 + "⁰F";
}
convert.addEventListener("click",()=>{
    let output;
    if(type.selectedIndex==0){
        output=FtoC(tempInp.value);
    }
    else if(type.selectedIndex==1){
        output=CtoF(tempInp.value);
    }
    else{
        output="Failed";
    }
    result.value= output;
})