<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import U from 'mapbox-gl-utils';
import { EventBus } from '../EventBus';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
export default {
    async mounted() {
        // replace this Mapbox access token with your own
        mapboxgl.accessToken =
            'pk.eyJ1IjoiY3Jvd2RzcG90MSIsImEiOiIwTFItekZ3In0.M_0CqFroH04TUc-K1_CHXQ';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [144.96046, -37.81739], // starting position [lng, lat]
            zoom: 12, // starting zoom,
            style: 'mapbox://styles/crowdspot1/ckpxavg6f0d3y18p81ddb4vbo',
        });
        U.init(map, mapboxgl);

        window.map = map;
        this.map = map;
        window.app.Map = this;
        await map.U.onLoad();
        this.initMapContent(map);
    },
    methods: {
        initMapContent(map) {
            function hoverPoint(f) {
                map.U.setData('hovered', {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: f ? [...f.geometry.coordinates] : [],
                    },
                });
            }
            const geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
            });
            geocoder.addTo(this.map);

            map.U.addGeoJSON('selected');
            map.U.addCircle('selected-circle', 'selected', {
                circleStrokeColor: 'white',
                circleStrokeWidth: 4,
                circleRadius: 10,
                circleColor: 'transparent',
            });

            map.U.addGeoJSON('hovered');
            map.U.addCircle('hovered-circle', 'hovered', {
                circleStrokeColor: 'white',
                circleStrokeWidth: 2,
                circleRadius: 6,
                circleColor: 'transparent',
            });
            const circleLayers = [
                'yg-final-archivemap-1-unsafe',
                'yg-final-archivemap-1-safe',
            ];

            map.U.hoverPointer(circleLayers);
            let popup;
            // circleLayers.forEach((l) => map.on('mouseover', l, hoverPoint));
            map.on('mousemove', (e) => {
                const features = map.queryRenderedFeatures(e.point, {
                    layers: circleLayers,
                });
                // console.log(features);
                hoverPoint(features[0]);
            });
            map.U.clickLayer(circleLayers, ({ features }) => {
                const f = features[0];
                const p = f.properties;
                const age = p.Age.match(/[0-9]/) ? `${p.Age} years old` : '';
                const gender = p.Gender.match(/no response/i) ? '' : p.Gender;
                const minority = p.Minority.match(/no response/i)
                    ? ''
                    : p.Minority;
                const demographic = [age, gender, minority]
                    .filter(Boolean)
                    .join(', ');
                // const rating = [
                // console.log(p);
                const html =
                    `
                        <h4 class="stress-${p.Stress_rating}">${p.Name}</h4>
                        <blockquote>
                        ${p.Description}
                        </blockquote>` +
                    // <p class="rating">${p.Stress_rating}</p>
                    `<p class="demographic">${demographic}</p>`;
                // const html = `
                //     <h2>${p.Name}</h2>
                //     <p>
                //     Description:
                //     <i>
                //     ${p.Description}
                //     </i>
                //     </p>
                //     <p>
                //     'Age:
                //     ${p.Age}
                //     </p>
                //     <p>
                //     'Gender:
                //     ${p.Gender}
                //     </p>
                //     <p>
                //     Minority group:
                //     ${p.Minority}
                //     </p>`;

                // console.log(f);
                if (popup) {
                    popup.remove();
                }
                popup = new mapboxgl.Popup({ closeButton: false });
                popup.setHTML(html);
                popup.setLngLat(f.geometry.coordinates);
                popup.addTo(map);
                map.U.setData('selected', {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: [...f.geometry.coordinates],
                    },
                });
                map.panTo(f.geometry.coordinates);
            });
        },
    },
};
</script>

<style>
.mapboxgl-popup blockquote {
    /* background: #f9f9f9; */
    /* background: hsl(60, 90%, 80%); */
    /* border-left: 10px solid #ccc; */
    margin: 10px 5px;
    padding: 0.5em 10px;
    quotes: '\201C' '\201D' '\2018' '\2019';
    font-style: italic;
    font-size: 14px;
}
.mapboxgl-popup blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
}
.mapboxgl-popup blockquote p {
    display: inline;
}
.mapboxgl-popup h4 {
    text-align: center;
    margin-top: 4px;
    font-size: 16px;
    padding: 0 4px;
}

.stress-1 {
    border-left: 5px solid grey;
    border-right: 5px solid grey;
}

.stress-5 {
    border-left: 5px solid #c70579;
    border-right: 5px solid #c70579;
}
.stress-4 {
    border-left: 5px solid #e24aab;
    border-right: 5px solid #e24aab;
}
.stress-3 {
    border-left: 5px solid #dd6fba;
    border-right: 5px solid #dd6fba;
}
.stress-2 {
    border-left: 5px solid #d894ca;
    border-right: 5px solid #d894ca;
}
.stress-1 {
    border-left: 5px solid #d4b9da;
    border-right: 5px solid #d4b9da;
}
.stress-0 {
    border-left: 5px solid #66bd47;
    border-right: 5px solid #66bd47;
}

.mapboxgl-popup-content {
    padding: 2px;
}

.demographic {
    text-align: center;
}
</style>
