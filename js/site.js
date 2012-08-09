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
        var path = window.location.pathname.replace(/(index)?\.html$/,"").replace(/\/$/,"").split('/');
        var crumbs = '';
        path[0] = 'home';
        for (var i = 0; i < path.length; i++) {
            var elem = path[i].toLowerCase().replace(/_/g,' ');
            if (i == path.length-1) {
                crumbs = crumbs + '<li>' + elem + '</li>';
            } else {
                var p = '/';
                if (i > 0) {
                    p = p + path.slice(1, i + 1).join('/') + '/'
                }
                p = p.replace(/\/+/,'/');
                crumbs = crumbs + '<li><a href="' + p + '">' + elem + '</a>&nbsp;</li>'; 
            }
        }            
        $('#tdr_crumbs_list').append(crumbs);
        $('#tdr_crumbs_list li a').after('&nbsp;&raquo;');
    });
})(jQuery);
