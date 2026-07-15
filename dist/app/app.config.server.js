import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
const serverConfig = {
    providers: []
};
export const config = mergeApplicationConfig(appConfig, serverConfig);
//# sourceMappingURL=app.config.server.js.map