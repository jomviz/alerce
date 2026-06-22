var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3526277468315122,
        "pitch": -0.00250145155078485,
        "fov": 1.3237681912121593
      },
      "linkHotspots": [
        {
          "yaw": 0.5147169246682264,
          "pitch": 0.17261692324976252,
          "rotation": 0,
          "target": "1-estar-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estar-comedor",
      "name": "Estar Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7300038089046357,
          "pitch": 0.4482157570601508,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -0.36564232471055647,
          "pitch": 0.09955284624606442,
          "rotation": 0,
          "target": "3-hall-pa"
        },
        {
          "yaw": 1.3804346832125312,
          "pitch": 0.4682003583438039,
          "rotation": 0,
          "target": "2-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-patio",
      "name": "Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6664527800383588,
          "pitch": 0.3568157111413779,
          "rotation": 0,
          "target": "1-estar-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall-pa",
      "name": "Hall PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4610078644183808,
          "pitch": 0.36549340847792244,
          "rotation": 0,
          "target": "5-dormitorio1"
        },
        {
          "yaw": -1.139589521403824,
          "pitch": 0.6703568162187139,
          "rotation": 0,
          "target": "6-dormitorio2"
        },
        {
          "yaw": -2.4646766471670443,
          "pitch": 0.7533422282263516,
          "rotation": 0,
          "target": "1-estar-comedor"
        },
        {
          "yaw": 2.271306591414696,
          "pitch": 0.5928348401522001,
          "rotation": 0,
          "target": "4-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dormitorio-principal",
      "name": "Dormitorio Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.633125421994956,
          "pitch": 0.4570691646804601,
          "rotation": 0,
          "target": "3-hall-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dormitorio1",
      "name": "Dormitorio1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5208823904708577,
          "pitch": 0.5259791683853763,
          "rotation": 0,
          "target": "3-hall-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dormitorio2",
      "name": "Dormitorio2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7686908006775148,
          "pitch": 0.5665156970680005,
          "rotation": 0,
          "target": "3-hall-pa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
