class Pizza{
  //type constructor below
constructor(s,m,v){
  this.size = s
  this.meatToppings = m;
  this.veggieToppings = v;
}


  //type instance functions below
sizeCost(){
  if(this.size == "S" || this.size == "s"){
    return 7.99;
  }
  else if(this.size == "M"){
    return 9.99;
  }
  else if(this.size == "L"){
    return 12.99;
  }
  else if(this.size == "XL"){
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
    front = this.meatToppings.slice(0,index);
    back = this.meatToppings.slice(index+1,this.meatToppings.length);
    this.meatToppings = front.concat(back);
  }
  else if(toptype == "veggie"){
    let index = this.veggieToppings.indexOf(newtop);
    front = this.veggieToppings.slice(0,index);
    back = this.veggieToppings.slice(index+1,this.veggieToppings.length);
    this.veggieToppings = front.concat(back);
  }
}
  //type class functions below
static promotionalDeal(pizza,percent){
  percent = percent*0.01
  return pizza.price()-(pizza.price()*percent);
}
}

let mypizza = new Pizza("L",["pepperoni"],["onions","peppers","olives"]);
mypizza.removeTopping("veggie",["olives"]);
mypizza.addTopping("meat",["bacon"]);
