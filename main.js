$("#Send").click(function () {
  var i = document.getElementById("inlineFormSelectPref").value;
  var url = document.getElementById("inlineFormInputGroupURL").value;
  var email = document.getElementById("inlineFormInputGroupEmail").value;
  var password = document.getElementById("inlineFormInputGroupPassword").value;
  JSONObject = {
    email: email,
    password: password,
  };

  if (i == 2) {
    /**
     ** POST
     */
    $.ajax({
      url: url,
      type: "POST",
      
      data: JSONObject,
      success: function (response) {
        var s = JSON.stringify(response);
        document.getElementById("output").innerHTML = s;
      },
    });
  } else if (i == 1) {
    /**
     ** GET
     */
    $.ajax({
      url: url,
      type: "GET",
      
      success: function (response) {
        var s = JSON.stringify(response.data);
        document.getElementById("output").innerHTML =s;

       
      },
    });
  }
});
