import GithubSerializer from './github';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default GithubSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    labels: { embedded: 'always'}
  },

  normalize(type, hash, prop) {
    hash = {
      id: hash.recordId || hash.url.replace('https://api.github.com/repos/', ''),
      title: hash.title,
      body: hash.body,
      state: hash.state,
      number: hash.number,
      milestone: hash.milestone ? hash.milestone.number : null,
      labels: hash.labels
    };
    return this._super(type, hash, prop);
  }
});
