M.addEventFns({
  post: {
    click: function() {
      ui.load('/demand/post', '添加需求');
    }
  },
  show: {
    click: function() {
      var args = M.getEventArgs(this);
      $.get('/demand/' + args.id, function(res) {
        if(res) {
          $('#recent').addClass('hide');
          $('#show').html(res).removeClass('hide');
        }
      });
    }
  }
});