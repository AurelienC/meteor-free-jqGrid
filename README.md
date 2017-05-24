# free-jqGrid for Meteor

This Meteor package is made from [free-jqGrid](https://github.com/free-jqgrid/jqGrid),  a complete Grid jQuery Plugin for tables. Is it the free version of [jqGrid](https://github.com/tonytomov/jqGrid).

For the moment, only english locale is enabled.

## Install
Use this command `meteor add aurelienc:free-jqgrid` into your project folder or add this package `aurelienc:free-jqgrid` into the `.meteor\packages` file.

## Usage
  You should use `datatype: 'local'` for fetch data.

  If you have a [Collection](http://docs.meteor.com/#collections) called `Clients` width `first`, `last` and `email` properties.

  1. Create a template:

  ```html
  <!-- table.html -->
  <template name="jqGridTemplate">
    <table id="grid"></table>
    <div id="pager"></div>
  </template>
  ```
  1. Add `created`, `rendered` and `destroyed` events

  ```js
  // table.js
  Template.jqGridTemplate.created = function() {
    var handle = Clients.find({}).observe({
      // Add the recently created document to table.
      addedAt: function (doc, atIndex, before) {
        jQuery("#grid").jqGrid('addRowData', atIndex + 1, doc);
      },
      // Update the document.
      changedAt: function(newDoc, oldDoc, atIndex) {
        jQuery("#grid").jqGrid('setRowData', atIndex, newDoc);
      },
      // Remove the document.
      removedAt: function(oldDoc, atIndex) {
        jQuery("#grid").jqGrid('delRowData', atIndex, oldDoc);
      }
    });
  };

  Template.jqGridTemplate.rendered = function() {
    jQuery("#grid").jqGrid({
      datatype: 'local', // Datatype
      data: Clients.find({}).fetch(), // JSON Object
      colNames: ['First Name', 'Last Name', 'E-mail'],
      colModel: [
        {name: 'first', index: 'first', searchoptions: {sopt: ['cn','nc','eq','bw','bn','ew','en']}},
        {name: 'last', index: 'last', searchoptions: {sopt: ['cn','nc','eq','bw','bn','ew','en']}},
        {name: 'email', index: 'email', searchoptions: {sopt: ['cn','nc','eq','bw','bn','ew','en']}}
      ],
      rowNum: 10, // Show 10 rows
      rowList: [10, 20, 30, 40, 50],
      pager: '#pager',
      sortname: 'first',
      viewrecords: true,
      sortorder: 'desc',
      caption: 'Clients',
      height: '100%',
      gridview: true,
      ignoreCase: true,
      autoencode: true,
      autowidth: true
    })
    .jqGrid('filterToolbar',{searchOperators : true, searchOnEnter: false});    
  };

  Template.test.destroyed = function() {
    jQuery(".ui-jqgrid").remove();
    // Remove jqGrid. TODO: use GridDestroy() method.
  };
  ```

## Configuration
You can play within rendered event and configure jqGrid, check the [free-jqGrid documentation](https://free-jqgrid.github.io/).
