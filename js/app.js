setInterval(function(){
        if (!window.navigator.onLine) {
            $("#status").fadeIn( "slow" );
        } else {    
            $("#status").fadeOut( "slow" );
        }
    },5);