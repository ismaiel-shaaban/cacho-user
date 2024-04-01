import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import {memo, useCallback, useEffect, useState} from "react";

const ChangeLocationContent = () => {
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

    const handleBoundsChanged = useCallback(() => {
        if (map) {
            const bounds = map.getBounds();
            const center = bounds.getCenter();
            console.log("center", center.lat(), center.lng())
            setCenter({
                lat: center.lat(),
                lng: center.lng(),
            });
        }
    }, [map]);

    return (<div>
            {isLoaded ? (<GoogleMap
                id="marker-example"
                zoom={9}
                mapContainerStyle={{height: "400px", width: "100%"}}
                onLoad={onLoad}
                onUnmount={onUnmount}
                center={center}
                onDragEnd={
                    handleBoundsChanged
                }
            >
                <Marker position={center}/>
            </GoogleMap>) : null}
        </div>

    );
}

export default memo(ChangeLocationContent);