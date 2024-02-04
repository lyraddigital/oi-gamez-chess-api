interface HandlerFilePaths {
  initializeGame: string;
}

interface HandlerFunctionNames {
  initializeGame: string;
}

interface ResourcePaths {
  games: string;
}

export const HandlerFilePaths: HandlerFilePaths = {
  initializeGame:
    "../../../lambda/handlers/rest/initialize-game-handler/src/index.ts",
};

export const HandlerFunctionNames: HandlerFunctionNames = {
  initializeGame: "handler",
};

export const ResourcePaths: ResourcePaths = {
  games: "games",
};
