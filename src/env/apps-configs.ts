import { IAppConfig } from "../types";

export const APPS_CONFIG = new Map <string,IAppConfig>()
APPS_CONFIG.set('ssngrx',{bootstrapPath:'c:/JS/JSP/prod-server-ts-express/dist/public/apps/ssngrx/',urlPath:'ssngrx',selector:'ssngrx'})
APPS_CONFIG.set('rtq',{bootstrapPath:'c:/JS/JSP/prod-server-ts-express/dist/public/apps/rqt/',urlPath:'rtq',selector:'rqt'})
APPS_CONFIG.set('aam',{bootstrapPath:'c:/JS/JSP/prod-server-ts-express/dist/public/apps/aam/',urlPath:'aam',selector:'aam'})
  

