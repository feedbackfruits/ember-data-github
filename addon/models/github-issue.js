import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';


export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  number: DS.attr('number'),
  state: DS.attr('string'),
  milestone: DS.attr('number'),

  // repository: belongsTo('githubRepository', {
  //   async: true,
  //   inverse: null
  // }),

  // milestone: belongsTo('milestone', {
  //   async: false,
  //   inverse: null
  // })
});
