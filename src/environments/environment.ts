import { Environment } from '@shared/types/environment.types';
import { EnvironmentConstants } from './environment.constants';

export const environment: Environment = {
  production: false,
  apiPath: EnvironmentConstants.apiPath,
};
