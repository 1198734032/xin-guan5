function yanzheng(){
let text=document.getElementById('text').value;
if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(text)){
    alert("号码有误，请重新填写");
    return false;
}else{
    alert("提交成功！");
}
}
