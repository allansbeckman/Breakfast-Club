define(['app/InvestorCard'], function(InvestorCard){
  var InvestorCards = Backbone.Collection.extend({
  model: InvestorCard
  });
  return new InvestorCards();
});
