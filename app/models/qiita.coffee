exports.definition =
  config:
    URL: "https://qiita.com/api/v1/items"
    adapter:
      type: 'restapi'
      collection_name: 'qiita'
    extendModel: (Model) ->
      _.extend Model.prototype, () ->
        return Model
        
    extendCollection: (Collection) ->
      _.extend Collection.prototype, () ->
        return Collection
      


