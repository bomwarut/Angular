import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  
//การInterpolate
name:string = "God of dead";
chname : string = "Kurosaki Ichigo";
value = 0;

claculate(value:string){
const price = Number(value);
this.value = ((price*3)/4);
}

changename(){
  this.chname = "Byakuya";
}

Bleach(){
  this.name = "god of headhunter ";
  console.log("Kurosaki Ichigo");
}

testClick(){
  console.log('test eventbinding');
}

testNumberChange(value:number){
  console.log('Test number change : ', value);
}

text1 = 'Maxlabel';
text2 = 'Minlabel';

squareheight = 100;
squarewidth = 250;

appCounter = 20;

activate : boolean = false;

customerlist : string[] = ['customer1','customer2'];

pushCustomer(){
  this.customerlist.push('customer' + (this.customerlist.length+1));
}
unshiftCustomer(){
  this.customerlist.unshift('customer' + (this.customerlist.length+1));
}
removeCustomer(index :number){
  this.customerlist.splice(index,1); 
}
}
