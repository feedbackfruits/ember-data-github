import GithubRepositoryAdapter from './github-repository';

export default GithubRepositoryAdapter.extend({
  buildURL(type, id, snapshot, requestType, query) {
    let builtURL = this._super(type, id, snapshot);
    builtURL = builtURL.replace('issues', 'repos');
    builtURL = builtURL.replace(/%2F/g, '/');

    if (!id) {
      builtURL = `${builtURL}/${query.id}`;
      delete query.id;
      query.state = 'all';
      query.per_page = 100;
    }

    return builtURL;
  }
});
