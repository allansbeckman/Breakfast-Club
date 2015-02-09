define([], function(){
var radius = 8;
    return Backbone.Model.extend({
    contains: function(x,y){
        var dx = x-this.get('x');
        var dy = y-this.get('y'); 
        var distance = Math.sqrt(dx*dx + dy*dy);
        return distance <= radius;
    },
    radius: radius
    });
});
