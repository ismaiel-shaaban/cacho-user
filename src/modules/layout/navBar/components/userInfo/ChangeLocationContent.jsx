import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import {memo, useCallback, useEffect, useState} from "react";
import {fetchLocation} from "@/utilis/getUserLocation";
import {strings} from "@/utilis/Localization";

const ChangeLocationContent = ({onLocationChange}) => {
    const [userLocation, setUserLocation] = useState("");
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script', googleMapsApiKey: "AIzaSyBhs9awrQC82lygPiy4Cq91xyX9s3WUjUI",
    })
    const [center, setCenter] = useState({
        lat: parseFloat(localStorage.getItem("latitude")), lng: parseFloat(localStorage.getItem("longitude"))
    })
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    useEffect(() => {
            // set location in local storage
            localStorage.setItem('latitude', center.lat);
            localStorage.setItem('longitude', center.lng);
    }, [center]);

    useEffect(() => {
        fetchLocation(strings.getLanguage() || "en").then((data) => {
            setUserLocation(data?.location);
            onLocationChange(data?.location); // Call the prop callback
        });
    }, [center]);

    return (<div>
            {isLoaded ? (<GoogleMap
                id="marker-example"
                zoom={8}
                mapContainerStyle={{height: "400px", width: "100%"}}
                onLoad={onLoad}
                onUnmount={onUnmount}
                center={center}
            >
                <Marker position={center}
                        draggable={true}
                        onDragEnd={(e) => {
                            setCenter({lat: e.latLng.lat(), lng: e.latLng.lng()})
                        }}
                />
            </GoogleMap>) : null}
        </div>

    );
}

export default memo(ChangeLocationContent);