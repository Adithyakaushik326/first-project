document.getElementById("id1").addEventListener("click",getpos);

function getpos()
{
    var watch= navigator.geolocation.getCurrentPosition(onSuccess,onError);
    function onSuccess(position)
    {
        alert('latitude : '      + position.coords.latitude + '\n'+        'longitude:'+          position.coords.longitude+'\n');
        var lat= position.coords.latitude;
        var lon = position.coords.longitude;
    }
    
    function onError(error)
    {
        alert('code:'   + error.code    +'\n'+'message'+ error.message +'/n');
        
    }
}