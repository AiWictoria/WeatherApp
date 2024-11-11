let isComparing = false;

function landChange() {

    isComparing = !isComparing;

    if (isComparing) {
        document.getElementsByClassName('land-1')[0].className = 'land-1 compare land-box compare';
        document.getElementsByClassName('land-2')[0].className = 'land-2 compare land-box compare';
        document.getElementsByClassName('forcast-land-1')[0].className = 'forcast-land-1 compare forcast-box compare';
        document.getElementsByClassName('forcast-land-2')[0].className = 'forcast-land-2 compare forcast-box compare';
    }
    else {
        document.getElementsByClassName('land-1')[0].className = 'land-1 land-box';
        document.getElementsByClassName('land-2')[0].className = 'land-2 land-box';
        document.getElementsByClassName('forcast-land-1')[0].className = 'forcast-land-1 forcast-box';
        document.getElementsByClassName('forcast-land-2')[0].className = 'forcast-land-2 forcast-box';
     }
}