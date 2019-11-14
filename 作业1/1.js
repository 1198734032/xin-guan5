function Father(bloodType){
    this.bloodType=bloodType;
}
let father=new Father("A");
Father.prototype.wife="Mother";
console.log(father);
console.log(father.wife)
function Son(){
    this.name='Jone';
    this.age='18';
    this.phone='119';
    this.mother=father.wife;
    Father.call(this,"A");
}
let son1=new Son();
console.log (son1)


function daughter(){
    this.name='Lisa';
    this.age='18';
    this.phone='110';
    this.mother=father.wife;
    Father.call(this,"A");
}
let daughter1=new daughter();
console.log (daughter1)

// function daughter (){
//     this.name='Lisa';
//     this.age='18';
//     this.phone='110';
//     this.mother=father.wife;
//     Father.call(this,"A");
// }
// let daughter1=new daughter();
// console.log(daugher1);
