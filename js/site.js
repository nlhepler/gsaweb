(function($) {
    $(document).ready(function() {
        $.ajax({
            url: "https://a4.ucsd.edu/tritON/resources/bugscript.jsp?target=https%3A%2F%2Fwww.ucsd.edu&jsoncallback=?",
            dataType: 'jsonp',
            jsonpCallback: 'a4sso',
            success: function(data) {
                if (data.eduUcsdActLoggedin) {
                    var url = "<div id=\"tdr_login_content\">You are logged in | <a href=\"<decorator:getProperty property='meta.ssologout.url' default='/security/logout' />?url=";
                    url += "<decorator:getProperty property='meta.logout.url' default='http://www.ucsd.edu' />";
                    url += "\">Log Out</a></div>";
                    $("#tdr_login").empty();
                    $("#tdr_login").append(url);
                    $("#tdr_login").attr("style", "display:block");
                }
            },
            error: function(jqXHR, textStatus) {
                console.log("error trying to communicate with a4 sso: " + textStatus);
            }
        });
    });
    $(document).ready(function() {
        $('#tdr_crumbs li a').after(' &raquo;');
    });
})(jQuery);
