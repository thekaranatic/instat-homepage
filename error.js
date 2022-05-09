function alert_No_access_to_mobile(){
    if(isMobileDevice)
        window.location.href = 'error.html';
    else
        window.location.href = 'app.html';
}
