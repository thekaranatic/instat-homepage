function alert_No_access_to_mobile(){
    if(isMobileDevice)
        window.location = 'error.html';
}