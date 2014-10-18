exports.definition = {
  config: {
    URL: "https://qiita.com/api/v1/items",
    adapter: {
      type: 'restapi',
      collection_name: 'qiita'
    },
    extendModel: function(Model) {
      return _.extend(Model.prototype, function() {
        return Model;
      });
    },
    extendCollection: function(Collection) {
      return _.extend(Collection.prototype, function() {
        return Collection;
      });
    }
  }
};
