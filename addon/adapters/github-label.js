import GithubRepositoryAdapter from './github-repository';

export default GithubRepositoryAdapter.extend({
  buildURL(type, id, snapshot) {
    let builtURL = this._super(type, id, snapshot);

    builtURL = builtURL.replace('labels', 'repos');
    builtURL = builtURL.replace(/%2F/g, '/');

    return builtURL;
  }
});
