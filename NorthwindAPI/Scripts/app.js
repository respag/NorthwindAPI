/// <reference path="datajs-1.1.3.js" />
OData.read("http://localhost:4664/Categories", function (data) {
      var html = "";
      $.each(data.results, function (c) {
          html += "<div>" + c.CategoryName + "</div>";
      });
      $(html).appendTo($("#target-element-id"));
  }
);
