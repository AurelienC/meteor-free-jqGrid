# jqGrid for meteor

[jqGrid](http://www.trirand.com/) v4.6.0, is a complete Grid jQuery Plugin for tables.

## Install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add jqGrid`

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
  1. Add `created` and `rendered` events

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

## Configuration and Demo

You can play within rendered event and configure jqGrid, check the [jqGrid Demos](http://trirand.com/blog/jqgrid/jqgrid.html) for more configurations and Examples.


## Todo

  1. Configuration for extra plugins.
  1. Configuration for language.
  1. Examples.
