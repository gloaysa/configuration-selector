import React from 'react';
import './App.css';
import ConfigurationsComponent from './components/configurations/configurations.component';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {ConfigurationService} from './services/configuration/configuration.service';

const configurationService = ConfigurationService.getInstance();
configurationService.getConfigurations();
function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <ConfigurationsComponent/>
            </Provider>
        </div>
    );
}

export default App;
