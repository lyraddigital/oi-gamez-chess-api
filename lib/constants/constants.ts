interface HandlerFilePaths {
  gameByRoomCode: string;
  roomEventsSubscriber: string;
}

interface HandlerFunctionNames {
  gameByRoomCode: string;
  roomEventsSubscriber: string;
}

enum EnvironmentVariableNames {
  gameTableName = "GAME_TABLE_NAME",
  corsAllowedOrigins = "CORS_ALLOWED_ORIGINS",
  roomCodeIndexName = "ROOM_CODE_INDEX_NAME",
  roomReceiveEventBusName = "ROOM_RECEIVE_EVENT_BUS_NAME",
  roomReceiveEventBusEventSourceName = "ROOM_RECEIVE_EVENT_BUS_EVENT_SOURCE_NAME",
}

interface GameByRoomCodeEnvironmentVariables {
  gameTableName: string;
  roomCodeIndexName: string;
  corsAllowedOrigins: string;
}

interface ResourcePaths {
  games: string;
  byRoomCode: string;
  room: string;
}

interface RoomEventsSubscriberEnvironmentVariables {
  gameTableName: string;
  roomCodeIndexName: string;
  roomReceiveEventBusName: string;
  roomReceiveEventBusEventSourceName: string;
}

interface EnvironmentVariables {
  gameByRoomCode: GameByRoomCodeEnvironmentVariables;
  roomEventsSubscriber: RoomEventsSubscriberEnvironmentVariables;
}

interface IndexNames {
  roomCode: string;
}

export const ResourcePaths: ResourcePaths = {
  games: "games",
  byRoomCode: "byRoomCode",
  room: "{roomCode}",
};

export const HandlerFilePaths: HandlerFilePaths = {
  gameByRoomCode:
    "../../../lambda/handlers/rest/get-game-by-room-code-handler/src/index.ts",
  roomEventsSubscriber:
    "../../../lambda/handlers/subscribers/room-events-subscriber/src/index.ts",
};

export const HandlerFunctionNames: HandlerFunctionNames = {
  gameByRoomCode: "handler",
  roomEventsSubscriber: "handler",
};

export const EnvironmentVariables: EnvironmentVariables = {
  gameByRoomCode: {
    gameTableName: EnvironmentVariableNames.gameTableName,
    roomCodeIndexName: EnvironmentVariableNames.roomCodeIndexName,
    corsAllowedOrigins: EnvironmentVariableNames.corsAllowedOrigins,
  },
  roomEventsSubscriber: {
    gameTableName: EnvironmentVariableNames.gameTableName,
    roomCodeIndexName: EnvironmentVariableNames.roomCodeIndexName,
    roomReceiveEventBusName: EnvironmentVariableNames.roomReceiveEventBusName,
    roomReceiveEventBusEventSourceName:
      EnvironmentVariableNames.roomReceiveEventBusEventSourceName,
  },
};

export const IndexNames: IndexNames = {
  roomCode: "RoomCode-index",
};
