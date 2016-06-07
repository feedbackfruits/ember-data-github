import GithubSerializer from './github';

export default GithubSerializer.extend({
  normalize(type, hash, prop) {
    hash = {
      id: hash.recordId || hash.url.replace('https://api.github.com/repos/', ''),
      url: hash.url,
      name: hash.name,
      color: hash.color
    };
    return this._super(type, hash, prop);
  }
});
