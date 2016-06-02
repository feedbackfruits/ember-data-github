import GithubRepositoryAdapter from './github-repository';
import GithubAdapter from './github';

export default GithubRepositoryAdapter.extend({
  buildURL(type, id, snapshot, requestType, query) {
    // debugger;
    let builtURL = this._super(type, id, snapshot);
    builtURL = builtURL.replace('milestones', 'repos');
    builtURL = builtURL.replace(/%2F/g, '/');

    if (!id) {
      builtURL = `${builtURL}/${query.id}`;
      delete query.id;
      query.state = 'all';
    }

    return builtURL;
  },
  // pathForType(type) {
  //   return '';
  // }
});
