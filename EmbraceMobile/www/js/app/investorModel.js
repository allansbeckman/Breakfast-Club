define(['app/Investor'], function(Investor){
  var Investors = Backbone.Collection.extend({
  model: Investor
  });
  return new Investors();
});
