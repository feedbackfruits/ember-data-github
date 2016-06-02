import GithubSerializer from './github';

export default GithubSerializer.extend({
  normalize(modelClass, resourceHash, prop) {
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    let hash = {
      id: resourceHash.recordId || resourceHash.full_name,

      fullName: resourceHash.full_name,
      name: resourceHash.name,
      description: resourceHash.description,
      language: resourceHash.language,

      htmlUrl: resourceHash.html_url,
      issuesUrl: resourceHash.issues_url,
      milestonesUrl: resourceHash.milestones_url,

      fork: resourceHash.fork,
      private: resourceHash.private,

      createdAt: resourceHash.created_at,
      updatedAt: resourceHash.updated_at,
      pushedAt: resourceHash.pushed_at,

      links: {
        owner: resourceHash.owner.url,
        defaultBranch: `${resourceHash.url}/branches/${resourceHash.default_branch}`,
        branches: `${resourceHash.url}/branches`
      }
    };
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    return this._super(modelClass, hash, prop);
  }
});
