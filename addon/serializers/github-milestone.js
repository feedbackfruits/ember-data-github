import GithubSerializer from './github';

export default GithubSerializer.extend({
  normalize(type, hash, prop) {
    hash = {
      id: hash.recordId || hash.url.replace('https://api.github.com/repos/', ''),
      title: hash.title,
      body: hash.body,
      state: hash.state,
      number: hash.number,
      openIssues: hash.open_issues,
      closedIssues: hash.closed_issues
    };
    return this._super(type, hash, prop);
  }
});
