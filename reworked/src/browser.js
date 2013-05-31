browser = {};

browser.Animations = {
    showMessage : function(selector, message) {
        $(selector).text(message);
        $(selector).removeClass("error");
        $(selector).fadeIn(2000);
    },
    showError : function(selector, error) {
        $(selector).text(error);
        $(selector).addClass("error");
        $(selector).fadeIn(2000);
    }
};

browser.HTTP = {
    post : function(url, myData, successCallback, errorCallback) {
         $.ajax({
             url: url,
             type:"POST",
             data:myData,
             success: successCallback,
             error: errorCallback
         });
    }
};