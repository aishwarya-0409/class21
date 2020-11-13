function istouching(obj1,obj2){

    if(obj1.x-obj2.x< obj1.width/2+obj2.width/2
      && obj2.x-obj1.x< obj1.width/2+obj2.width/2 &&
  
   obj1.y-obj2.y< obj1.height/2+obj2.height/2
     && obj2.y-obj1.y< obj1.height/2+obj2.height/2 
   )
   {
   return true
  }else {
    return false
  }
  }
  function bounceoff(rect1,rect2){
  
    if(rect1.x-rect2.x< rect1.width/2+rect2.width/2
      && rect2.x-rect1.x< rect1.width/2+rect2.width/2 
   )
   {
    
    rect1.velocityX = rect1.velocityX*(-1);
   }
   if(rect1.y-rect2.y< rect1.height/2+rect2.height/2
     && rect2.y-rect1.y< rect1.height/2+rect2.height/2 
   )
   {
    rect1.velocityY = rect1.velocityY*(-1);
   }
  
  }
  
  
  