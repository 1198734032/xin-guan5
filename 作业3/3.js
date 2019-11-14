function check(){
  let text1=document.getElementById("text1").value;
  if(! /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(text1)){
      alert("号码有误，请重新填写");
      return false;
    }
  let text2=document.getElementById("text2").value;
  if (text1!=text2){
      alert("密码不一致");
      return false;
    }
  else {alert("提交成功！")}
}