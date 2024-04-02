export const fetchLocation = async (language) => {
    let latitude = localStorage.getItem('latitude');
    let longitude = localStorage.getItem('longitude');

    if (navigator.geolocation) {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        if (latitude === null || longitude === null || latitude === undefined || longitude === undefined || latitude === "undefined" || longitude === "undefined" || latitude === "" || longitude === "NaN" || latitude === "NaN" || longitude === "") {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        }
        const userLocationResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBhs9awrQC82lygPiy4Cq91xyX9s3WUjUI&language=${language}`);

        const userLocation = await userLocationResponse.json();
        const location = userLocation?.results[0]?.address_components
            .filter((ele) => ele.types.includes('political'))
            .map((el) => el.long_name)
            .slice(0, 8)
            .join(',')
            .toString();
        // set location in local storage
        localStorage.setItem('location', location);
        localStorage.setItem('latitude', latitude);
        localStorage.setItem('longitude', longitude)
        return {location, latitude, longitude};
    } else {
        throw new Error('Please enable location permission');
    }
};
