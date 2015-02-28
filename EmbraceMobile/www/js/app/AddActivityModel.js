define(['app/AddActivity'], function(AddActivity){
    var Activitys = Backbone.Collection.extend({
    model: AddActivity
    });
    return new AddActivity();
});