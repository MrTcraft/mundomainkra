var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "survival - overworld",
        "survival - nether",
        "survival - end",
        "creative - overworld",
        "creative - nether",
        "creative - end"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1679289083",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Survival Daytime",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1679286568,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                80,
                70,
                112
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                80,
                70,
                112
            ],
            "north_direction": 1
        },
        {
            "name": "Survival Nighttime",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "survivalnight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1679286568,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                80,
                70,
                112
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                80,
                70,
                112
            ],
            "north_direction": 1
        },
        {
            "name": "Survival Nether",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "survivalnetherTop",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - nether",
            "last_rendertime": 1679286485,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                80,
                70,
                112
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Survival End",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "survivalEnd",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - end",
            "last_rendertime": 1679285598,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                80,
                70,
                112
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Creative Overworld",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "creativeServer",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "creative - overworld",
            "last_rendertime": 1679252024,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                4,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                4,
                0
            ],
            "north_direction": 1
        },
        {
            "name": "Creative Nether",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "CreativeNetherTop",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "creative - nether",
            "last_rendertime": 1679176811,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                4,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Creative Nether All",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "CreativeNetherAll",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "creative - nether",
            "last_rendertime": 1679176811,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                4,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Creative End",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "CreativeEnd",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "creative - end",
            "last_rendertime": 1678928822,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                4,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
