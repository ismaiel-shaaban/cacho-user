export const fetchLocation = async (language) => {
    if (navigator.geolocation) {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const userLocationResponse = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBhs9awrQC82lygPiy4Cq91xyX9s3WUjUI&language=${language}`
        );

        const userLocation = await userLocationResponse.json();

        const location = userLocation?.results[0]?.address_components
            .filter((ele) => ele.types.includes('political'))
            .map((el) => el.long_name)
            .slice(0, 8)
            .join(',')
            .toString();

        return { location, latitude: position.coords.latitude, longitude: position.coords.longitude };
    } else {
        throw new Error('Please enable location permission');
    }
};