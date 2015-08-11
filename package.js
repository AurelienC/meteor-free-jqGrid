Package.describe({
  summary: "jQuery Grid Plugin - jqGrid",
  name: "ramgopal:jqgrid",
  version: "0.1.5",
  git: "https://github.com/ramgo2/meteor-jqGrid.git",
  documentation: 'README.md'
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', 'client');

  var path = Npm.require('path');
  var asset_path = path.join('lib');
  api.add_files(path.join(asset_path, 'css', 'ui.jqgrid.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'i18n/grid.locale-en.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.jqGrid.min.js'), 'client');

});
