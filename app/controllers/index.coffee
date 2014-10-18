$.index.open()

$.activityIndicator.show()
qiitaItems = Alloy.createCollection 'qiita'
qiitaItems.fetch
  success: () ->
    $.activityIndicator.hide()
    # 本来はstringify→parse不要だがrestapi Adapter
    # 使うと何か不要な文字か制御コードが含まれているようなので
    # ひとまず以下の対応を実施。
    _stringify = JSON.stringify(qiitaItems)
    items = JSON.parse(_stringify)
    return refreshMainMenu items

  error: () ->
    $.activityIndicator.hide()
    Ti.API.info "error"


# Qiitaから取得したデータをTableViewにセットする処理
refreshMainMenu = (items) ->
  rows = []
  for item in items
    Ti.API.info item.title
    
    row = $.UI.create "TableViewRow",
      classes: "itemRow"
      data: item
      
    titleLabel = $.UI.create "Label",
      text:item.title
      classes: "titleLabel"

    bodyLabel = $.UI.create "Label",
      text:item.raw_body
      classes: "body"
            
    row.add titleLabel
    row.add bodyLabel
    rows.push row
    
  return $.mainMenu.setData rows
