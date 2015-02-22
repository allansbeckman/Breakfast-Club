define(['app/model', 'app/Vertex', 'app/dmodel'], function(model, Vertex, dmodel){
   var vertexBeingDragged,
       startX,
       startY;
   
    function findVertexUnderPoint(x,y){
      return model.find(function(vertex){
       return vertex.contains(x,y);
      });  
    }
    
    canvas.addEventListener('mousedown', function(e){
          console.log("triggered");
       vertexBeingDragged = findVertexUnderPoint(e.pageX, e.pageY);
        
    if(!vertexBeingDragged){    
       model.add(new Vertex({
           x: e.pageX,
           y: e.pageY
       }));
    }
    else{
    startX = vertexBeingDragged.get('x');
    startY = vertexBeingDragged.get('y');
    }
   });
    canvas.addEventListener('mousemove', function(e){
          console.log("triggered");
    if(vertexBeingDragged){
        vertexBeingDragged.set({
        x: e.pageX,
        y: e.pageY
        });
    }
    });
    
    canvas.addEventListener('mouseup', function(e){
          console.log("triggered");
        if(vertexBeingDragged){
             if(startX == vertexBeingDragged.get('x') &&
            startY == vertexBeingDragged.get('y')){
                 dmodel.add(vertexBeingDragged);
                 model.remove(vertexBeingDragged);
             }
        }
        vertexBeingDragged = null;
    });
    canvas.addEventListener('touchstart', function(e){
       vertexBeingDragged = findVertexUnderPoint(e.pageX, e.pageY);
        
    if(!vertexBeingDragged){    
       model.add(new Vertex({
           x: e.pageX,
           y: e.pageY
       }));
    }
    else{
    startX = vertexBeingDragged.get('x');
    startY = vertexBeingDragged.get('y');
    }
   });
    canvas.addEventListener('touchmove', function(e){
        console.log("triggered");
    if(vertexBeingDragged){
        vertexBeingDragged.set({
        x: e.pageX,
        y: e.pageY
        });
    }
    })
    
    canvas.addEventListener('touchend', function(e){
          console.log("triggered");
        if(vertexBeingDragged){
             if(startX == vertexBeingDragged.get('x') &&
            startY == vertexBeingDragged.get('y')){
                 dmodel.add(vertexBeingDragged);
                 model.remove(vertexBeingDragged);
             }
        }
        vertexBeingDragged = null;
    });

    
    KeyboardJS.on('ctrl + z', function() {
        canvas.focus();
        dmodel.add(model.last());
        model.remove(model.last());
          console.log("triggered");
    });
    
    KeyboardJS.on('shift + z', function() {
          console.log("triggered");
        canvas.focus();
        model.add(dmodel.first());
        dmodel.remove(dmodel.first());
    });
    
    KeyboardJS.on('enter', function() {
          console.log("triggered");
        console.log("changing color");
        console.log(color.value);
        var v = model.last();
        model.remove(model.last());
        model.add(v);
    });
    
});