function isTouching(object1 , object2){
    a = object1.x-object2.x;
    b= object1.width/2 + object2.width/2;
    c = object2.x - object1.x;
  
    d = object1.y - object2.y;
    e = object1.height/2 + object2.height/2;
    f = object2.y - object1.y;
    if(a <= b && c <= b && d <= e && f <= e){
      return true;
    }
    else{
      return false ; 
    }
  }
  function bounceOff(object1, object2){
    g = object1.x - object2.x ;
    h = object1.width/2 + object2.width/2 ;
    i = object2.x - object1.x ;
  
    j = object1.y-object2.y;
    k = object1.height/2 + object2.height/2;
    l = object2.y - object1.y;
    
    if(g <= h && i <= h ){
      object1.velocityX = -(ball.velocityX);
    }
    if(j <= k && l <= k){
      object1.velocityY = -(ball.velocityY);
    }
  }
  function collide(object1 , object2){
    g = object1.x - object2.x ;
    h = object1.width/2 + object2.width/2 ;
    i = object2.x - object1.x ;
  
    j = object1.y-object2.y;
    k = object1.height/2 + object2.height/2;
    l = object2.y - object1.y;
    
    if(g <= h && i <= h ){
      object1.velocityX = 0;
      return true;
    }
    if(j <= k && l <= k){
      object1.velocityY = 0 ;
      return false;
    }
  }