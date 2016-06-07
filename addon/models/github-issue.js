import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  number: DS.attr('number'),
  state: DS.attr('string'),
  milestone: DS.attr('number'),

  labels: hasMany('githubLabel')
});
