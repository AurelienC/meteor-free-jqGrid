Package.describe({
  summary: "jQuery Grid Plugin - jqGrid"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');

  var path = Npm.require('path');
  var asset_path = path.join('lib');
  api.add_files(path.join(asset_path, 'css', 'ui.jqgrid.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'i18n/grid.locale-es.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.gqGrid.js'), 'client');

});
