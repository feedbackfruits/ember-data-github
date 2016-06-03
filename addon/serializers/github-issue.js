import GithubSerializer from './github';

export default GithubSerializer.extend({
  normalize(type, hash, prop) {
    hash = {
      id: hash.recordId || hash.url.replace('https://api.github.com/repos/', ''),
      title: hash.title,
      body: hash.body,
      state: hash.state,
      number: hash.number,
      milestone: hash.milestone ? hash.milestone.number : null
    };
    return this._super(type, hash, prop);
  }
});
