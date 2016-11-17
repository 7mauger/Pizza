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
    return sizeCost() = 7.99;
  }
  else if(this.size = "Medium"){
    return sizeCost() = 9.99;
  }
  else if(this.size = "Large"){
    return sizeCost() = 12.99;
  }
  else if(this.size = "Extra-Large"){
    return sizeCost() = 15.99;
  }
}

toppingCost(top){
  if(top == this.meatToppings){
    return meatToppings.length*.99;
  }
  if(top == this.veggieToppings){
    return veggieToppings.length*.5;
  }
}

price(){
  return toppingCost()+sizeCost();
}


  //type class functions below


}
