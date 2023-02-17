import {store} from '../../store/store';
import { parse } from 'yaml';
import {addCheckoutConfig} from '../../store/configurations.reducer';
import { ConfigurationFile } from '../../interfaces/configuration.interface';

export class ConfigurationService {
    static instance: ConfigurationService;
    private schemaPath = 'https://api.github.com/repos/gloaysa/configuration-selector/contents/schema-examples/';
    private configurations = ['checkout', 'cart'];

    static getInstance() {
        if (!this.instance) {
            this.instance = new ConfigurationService();
            return this.instance;
        }
        return this.instance;
    }

    async getConfigurations() {
        let files: ConfigurationFile[] = [];
        this.configurations.forEach((config) => {
            const url = `${this.schemaPath}${config}.configuration.yaml`;
            fetch(url, {
                headers: {
                    'accept': 'application/vnd.github.raw',
                }
            }).then(async (response) => {
                const schema: ConfigurationFile = parse(await response.text());
                files = [...files, schema];
                store.dispatch(addCheckoutConfig(files));
            });
        });
    }
}
