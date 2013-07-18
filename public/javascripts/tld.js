// Generated by CoffeeScript 1.6.3
$(function() {
  return $('form input.submit').on('click', function(event) {
    var data;
    event.preventDefault();
    data = $('form input.textInput').val();
    return $.ajax('/tld.json', {
      type: 'POST',
      data: {
        phrase: data
      },
      success: function(data, status) {
        var tld, _i, _len, _results;
        data = JSON.parse(data);
        console.log(data);
        if (data.length > 0) {
          $('ul.domainList').empty();
          _results = [];
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            tld = data[_i];
            _results.push($('ul.domainList').append("<li class=\"domainListItem\">" + tld + "</li>"));
          }
          return _results;
        } else {
          return $('ul.domainList').append("<p id=\"noResult\">                Your phrase does not contain any TLD :( it seems to have to use those lame .com            </p>");
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        return alert("Error: " + textStatus + " " + errorThrown);
      }
    });
  });
});
