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
        let location
        if(userLocation?.plus_code?.compound_code?.includes(" ")){
            location = userLocation?.plus_code?.compound_code.split(" ").slice(1).join(" ")
        } else {
            const resultLength = userLocation.results.length
            location = userLocation?.results[resultLength-2].formatted_address
        }

        // set location in local storage
        localStorage.setItem('location', location);
        localStorage.setItem('latitude', latitude);
        localStorage.setItem('longitude', longitude)
        return {location, latitude, longitude};
    } else {
        throw new Error('Please enable location permission');
    }
};
