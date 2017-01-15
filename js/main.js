window.onload = function () {

  'use strict';

  var Viewer = window.Viewer;
  var console = window.console || { log: function () {} };
  var pictures = document.querySelector('.docs-pictures');

  var options = {
        // inline: true,
        url: 'data-original',
        ready:  function (e) {
          console.log(e.type);
        },
        show:  function (e) {
          console.log(e.type);
        },
        shown:  function (e) {
          console.log(e.type);
        },
        hide:  function (e) {
          console.log(e.type);
        },
        hidden:  function (e) {
          console.log(e.type);
        },
        view:  function (e) {
          console.log(e.type, e.detail.index);
        },
        viewed:  function (e) {
          console.log(e.type, e.detail.index);
          // this.viewer.zoomTo(1).rotateTo(180);
        }
      };
  var viewer;

  function toggleButtons(mode) {
    var targets;
    var target;
    var length;
    var i;

    
  }

  function addEventListener(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    }
  }

  addEventListener(pictures, 'ready', function (e) {
    console.log(e.type);
  });
  addEventListener(pictures, 'show', function (e) {
    console.log(e.type);
  });
  addEventListener(pictures, 'shown', function (e) {
    console.log(e.type);
  });
  addEventListener(pictures, 'hide', function (e) {
    console.log(e.type);
  });
  addEventListener(pictures, 'hidden', function (e) {
    console.log(e.type);
  });
  addEventListener(pictures, 'view', function (e) {
    console.log(e.type, e.detail.index);
  });
  addEventListener(pictures, 'viewed', function (e) {
    console.log(e.type, e.detail.index);
  });
  viewer = new Viewer(pictures, options);

  toggleButtons(options.inline ? 'inline' : 'modal');


};
