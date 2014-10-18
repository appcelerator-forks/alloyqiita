var qiitaItems, refreshMainMenu;

$.index.open();

$.activityIndicator.show();

qiitaItems = Alloy.createCollection('qiita');

qiitaItems.fetch({
  success: function() {
    var items, _stringify;
    $.activityIndicator.hide();
    _stringify = JSON.stringify(qiitaItems);
    items = JSON.parse(_stringify);
    return refreshMainMenu(items);
  },
  error: function() {
    $.activityIndicator.hide();
    return Ti.API.info("error");
  }
});

refreshMainMenu = function(items) {
  var bodyLabel, item, row, rows, titleLabel, _i, _len;
  rows = [];
  for (_i = 0, _len = items.length; _i < _len; _i++) {
    item = items[_i];
    Ti.API.info(item.title);
    row = $.UI.create("TableViewRow", {
      classes: "itemRow",
      data: item
    });
    titleLabel = $.UI.create("Label", {
      text: item.title,
      classes: "titleLabel"
    });
    bodyLabel = $.UI.create("Label", {
      text: item.raw_body,
      classes: "body"
    });
    row.add(titleLabel);
    row.add(bodyLabel);
    rows.push(row);
  }
  return $.mainMenu.setData(rows);
};
