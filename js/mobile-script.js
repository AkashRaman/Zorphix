$(document).ready(function() {
    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
    if ( deviceWidth <= "767") {
        $('#xCoders').waypoint(function(direction) {
            if( direction == "down") {
                $('#xCoders').addClass('mobileEffect'); 
            } else {
                $('#xCoders').removeClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#thesis-Precized').waypoint(function(direction) {
            if( direction == "down") {
                $('#thesis-Precized').addClass('mobileEffect');
                $('#xCoders').removeClass('mobileEffect'); 
            } else {
                $('#thesis-Precized').removeClass('mobileEffect'); 
                $('#xCoders').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#plugs-out').waypoint(function(direction) {
            if( direction == "down") {
                $('#plugs-out').addClass('mobileEffect');
                $('#thesis-Precized').removeClass('mobileEffect'); 
            } else {
                $('#plugs-out').removeClass('mobileEffect'); 
                $('#thesis-Precized').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('# bgmiTournament').waypoint(function(direction) {
            if( direction == "down") {
                $('# bgmiTournament').addClass('mobileEffect');
                $('#plugs-out').removeClass('mobileEffect'); 
            } else {
                $('# bgmiTournament').removeClass('mobileEffect'); 
                $('#plugs-out').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#pixellence').waypoint(function(direction) {
            if( direction == "down") {
                $('#pixellence').addClass('mobileEffect');
                $('# bgmiTournament').removeClass('mobileEffect'); 
            } else {
                $('#pixellence').removeClass('mobileEffect'); 
                $('# bgmiTournament').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#euphony').waypoint(function(direction) {
            if( direction == "down") {
                $('#euphony').addClass('mobileEffect');
                $('#pixellence').removeClass('mobileEffect'); 
            } else {
                $('#euphony').removeClass('mobileEffect'); 
                $('#pixellence').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#fastnfrolic').waypoint(function(direction) {
            if( direction == "down") {
                $('#fastnfrolic').addClass('mobileEffect');
                $('#euphony').removeClass('mobileEffect'); 
            } else {
                $('#fastnfrolic').removeClass('mobileEffect'); 
                $('#euphony').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#trailblazers').waypoint(function(direction) {
            if( direction == "down") {
                $('#trailblazers').addClass('mobileEffect');
                $('#fastnfrolic').removeClass('mobileEffect'); 
            } else {
                $('#trailblazers').removeClass('mobileEffect'); 
                $('#fastnfrolic').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#pitchcraft').waypoint(function(direction) {
            if( direction == "down") {
                $('#pitchcraft').addClass('mobileEffect');
                $('#trailblazers').removeClass('mobileEffect'); 
            } else {
                $('#pitchcraft').removeClass('mobileEffect'); 
                $('#trailblazers').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#facts2lie1').waypoint(function(direction) {
            if( direction == "down") {
                $('#facts2lie1').addClass('mobileEffect');
                $('#pitchcraft').removeClass('mobileEffect'); 
            } else {
                $('#facts2lie1').removeClass('mobileEffect'); 
                $('#pitchcraft').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#team-section').waypoint(function(direction) {
            if( direction == "down") {
                $('#facts2lie1').removeClass('mobileEffect'); 
            } else {
                $('#facts2lie1').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('.class-item').removeClass('hover');
        $('.ftco-feature-1').removeClass('hover');
    } else { 
        $('.class-item').addClass('hover');
        $('.ftco-feature-1').addClass('hover');
    };
});