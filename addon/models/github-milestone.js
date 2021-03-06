import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  state: DS.attr('string'),
  number: DS.attr('number'),
  openIssues: DS.attr('number'),
  closedIssues: DS.attr('number')
});
