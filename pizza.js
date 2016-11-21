class pizza{
  //type constructor below
constructor(s,m,v){
  this.size = s
  this.meatToppings = m;
  this.veggieToppings = v;
}


  //type instance functions below
sizeCost(){
  if(this.size = "Small"){
    return 7.99;
  }
  else if(this.size = "Medium"){
    return 9.99;
  }
  else if(this.size = "Large"){
    return 12.99;
  }
  else if(this.size = "Extra-Large"){
    return 15.99;
  }
}

toppingCost(top){
  if(top == meat){
    return this.meatToppings.length*0.99;
  }
  if(top == veggie){
    return this.veggieToppings.length*0.5;
  }
}

price(){
  return this.sizeCost()+this.toppingCost(meat)+this.toppingCost(veggie);
}

addTopping(toptype,newtop){
  if(toptype == "meat"){
    this.meatToppings.push(newtop);
  }
  else if(toptype == "veggie"){
    this.veggieToppings.push(newtop);
  }
}

removeTopping(toptype,newtop){
  let front;
  let back;
  if(toptype == "meat"){
    let index = this.meatToppings.indexOf(newtop);
    front = this.meatToppings.splice(0,index);
    
  }
  else if(toptype == "veggie"){

  }
}
  //type class functions below
static promotionalDeal(pizza,percent){
  percent = percent*0.01
  return pizza.price()-(pizza.price()*percent);
}
}
