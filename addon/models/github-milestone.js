import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  state: DS.attr('string'),
  number: DS.attr('number'),
  openIssues: DS.attr('number'),
  closedIssues: DS.attr('number')

  // repository: belongsTo('githubRepository', {
  //   async: true,
  //   inverse: null
  // }),
  //
  // issues: hasMany('githubIssue', { async: true })

});
