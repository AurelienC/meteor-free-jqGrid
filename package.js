Package.describe({
  summary: "jQuery Grid Plugin - free-jqGrid",
  name: "aurelienc:free-jqgrid",
  version: "4.14.1",
  git: "https://github.com/AurelienC/meteor-free-jqGrid.git",
  documentation: 'README.md'
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', 'client');

  var path = Npm.require('path');
  var asset_path = path.join('lib');
  api.add_files(path.join(asset_path, 'css', 'jquery-ui.min.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'ui.jqgrid.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'i18n/grid.locale-en.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.jqgrid.min.js'), 'client');

});
