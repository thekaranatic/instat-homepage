function alert_No_access_to_mobile(){
    if(isMobileDevice)
        window.location = 'error.html';
    else
        window.location = 'app.html';
}
