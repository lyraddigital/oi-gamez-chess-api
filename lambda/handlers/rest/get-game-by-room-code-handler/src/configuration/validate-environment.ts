import { verifyCorsAllowedOrigin } from "@oigamez/configuration";

export const validateEnvironment = (): void => {
  verifyCorsAllowedOrigin();
};
