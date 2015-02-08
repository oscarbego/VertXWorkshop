'use strict';

var TaskboardController = (function() {

  var tasksTemplateSelector = "#tasks-template";
  var taskManager = null;

  var start = function(_taskManager) {
    taskManager = _taskManager;
    bindEvents();
    render();
  };

  var bindEvents = function(){
    console.log("bindEvents");
  };

  var render = function(){
    var source = $(tasksTemplateSelector).html();
    var template = Handlebars.compile(source);
    var tasks = taskManager.list();
    console.log("TaskboardController");
    console.log(tasks);
    var html = template(tasks);
    console.log("html: " + html);
  };

  return {
    start : start
  };

}());
