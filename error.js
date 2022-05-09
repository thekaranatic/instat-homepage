function alert_No_access_to_mobile(){
    if(isMobileDevice)
        alert("dont use");
    else
        window.location.href = 'app.html';
}
