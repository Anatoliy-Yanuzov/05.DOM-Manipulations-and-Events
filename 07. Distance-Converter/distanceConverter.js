function attachEventsListeners() {

    document.querySelector('#convert').addEventListener('click', (e)=>{

        let inputDistanceElement = Number(document.querySelector('#inputDistance').value);
        let outputDistanceElement = document.querySelector('#outputDistance');
        let inputUnitElements = document.querySelector('#inputUnits').value;
        let outputUnitElements = document.querySelector('#outputUnits').value;
    
        let currentUnit = 0;
        let result = 0;
    
        switch (inputUnitElements){
          case 'km':
            currentUnit = inputDistanceElement * 1000;
            break;
          case 'm':
            currentUnit = inputDistanceElement;
            break;
          case 'cm':
            currentUnit = inputDistanceElement * 0.01;
            break;
          case 'mm':
            currentUnit = inputDistanceElement * 0.001;
            break;
          case 'mi':
            currentUnit = inputDistanceElement * 1609.34;
            break;
          case 'yrd':
            currentUnit = inputDistanceElement * 0.9144;
            break;
          case 'ft':
            currentUnit = inputDistanceElement * 0.3048;
            break;
          case 'in':
            currentUnit = inputDistanceElement * 0.0254;
            break;
        }
        
        switch (outputUnitElements){
          case 'km':
            result = currentUnit / 1000;
            break;
          case 'm':
            result = currentUnit;
            break;
          case 'cm':
            result = currentUnit / 0.01;
            break;
          case 'mm':
            result = currentUnit / 0.001;
            break;
          case 'mi':
            result = currentUnit / 1609.34;
            break;
          case 'yrd':
            result = currentUnit / 0.9144;
            break;
          case 'ft':
            result = currentUnit / 0.3048;
            break;
          case 'in':
            result = currentUnit / 0.0254;
            break;
        }
        outputDistanceElement.value = result;
    });
}