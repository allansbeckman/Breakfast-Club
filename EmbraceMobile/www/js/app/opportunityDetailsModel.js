define(['app/opportunityDetails'], function(opportunityDetails){
  var OpportunityDetails = Backbone.Collection.extend({
  model: opportunityDetails
  });
  return new OpportunityDetails();
});
