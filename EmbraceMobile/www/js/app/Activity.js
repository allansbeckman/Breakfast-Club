define([], function(){
    return Backbone.Model.extend({
    shortMessage: function(){
        if(this.get('message').length > 10){
            return this.get('message').substring(0,10).concat("...");
        }
        return this.get('message');
    }
    });
});
