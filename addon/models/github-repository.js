import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  fullName: attr('string'),
  name: attr('string'),
  description: attr('string'),
  language: attr('string'),

  htmlUrl: attr('string'),
  issuesUrl: attr('string'),
  milestonesUrl: attr('string'),

  fork: attr('boolean'),
  private: attr('boolean'),

  createdAt: attr('date'),
  updatedAt: attr('date'),
  pushedAt: attr('date'),

  owner: belongsTo('githubUser', {
    async: true,
    inverse: null
  }),

  defaultBranch: belongsTo('githubBranch', {
    async: true,
    inverse: null
  }),

  branches: hasMany('githubBranch', { async: true }),
  // milestones: hasMany('githubMilestone', { async: true }),
  // issues: hasMany('githubIssue', { async: true })
});
