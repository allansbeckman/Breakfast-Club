define(['app/model'], function(model){
    var c = canvas.getContext('2d');
    function render(){
        console.log("rendering");
        alert("rendering");
        var prev = model.last();
        c.clearRect(0,0,canvas.width, canvas.height);
         c.beginPath();
        c.moveTo(prev.get('x'), prev.get('y'));
        model.each(function(curr){
         c.lineTo(curr.get('x'), curr.get('y'));
        prev = curr;
        });
         c.closePath();
        c.fillStyle = color.value;
        c.fill();
        c.stroke();
        model.each(renderVertex);
    }
    function renderVertex(vertex){
         x = vertex.get('x');
         y = vertex.get('y');
        c.beginPath();
        c.arc(x, y, vertex.radius, 0, 2*Math.PI);
        c.closePath();
        c.fillStyle = color2.value;
        c.fill();
    }
    
    model.on('add', render);
    model.on('change', render);
    model.on('remove', render);
});