import GithubRepositoryAdapter from './github-repository';

export default GithubRepositoryAdapter.extend({
  // buildURL(type, id, snapshot) {
  //   let builtURL = this._super(type, id, snapshot);
  //   return builtURL;
  // },
  pathForType(type) {
    return '';
  }
});
