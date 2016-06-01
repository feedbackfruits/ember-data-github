import GithubSerializer from './github';

export default GithubSerializer.extend({
  normalize(type, hash, prop) {
    hash = {
      id: hash.recordId || hash.url.replace('https://api.github.com/repos/', ''),
      title: hash.title,
      body: hash.body,
      number: hash.number
    };
    return this._super(type, hash, prop);
  }
});
