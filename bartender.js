function getDrinkByProfession(param){
let paramContainer = param.toLowerCase();
  
  if(paramContainer == "jabroni"){
    return "Patron Tequila";
  } else if(paramContainer == "school counselor"){
    return "Anything with Alcohol";
  } else if(paramContainer == "programmer"){
    return "Hipster Craft Beer";
  } else if(paramContainer == "bike gang member"){
    return "Moonshine";
  } else if(paramContainer == "politician"){
    return "Your tax dollars";
  } else if(paramContainer == "rapper"){
    return "Cristal";
  } else {
    return "Beer";
  }
}