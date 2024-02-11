interface HandlerFilePaths {
  roomEventsSubscriber: string;
}

interface HandlerFunctionNames {
  roomEventsSubscriber: string;
}

enum EnvironmentVariableNames {
  gameTableName = "GAME_TABLE_NAME",
  roomCodeIndexName = "ROOM_CODE_INDEX_NAME",
  roomReceiveEventBusName = "ROOM_RECEIVE_EVENT_BUS_NAME",
  roomReceiveEventBusEventSourceName = "ROOM_RECEIVE_EVENT_BUS_EVENT_SOURCE_NAME",
}

interface RoomEventsSubscriberEnvironmentVariables {
  gameTableName: string;
  roomCodeIndexName: string;
  roomReceiveEventBusName: string;
  roomReceiveEventBusEventSourceName: string;
}

interface EnvironmentVariables {
  roomEventsSubscriber: RoomEventsSubscriberEnvironmentVariables;
}

interface IndexNames {
  roomCode: string;
}

export const HandlerFilePaths: HandlerFilePaths = {
  roomEventsSubscriber:
    "../../../lambda/handlers/subscribers/room-events-subscriber/src/index.ts",
};

export const HandlerFunctionNames: HandlerFunctionNames = {
  roomEventsSubscriber: "handler",
};

export const EnvironmentVariables: EnvironmentVariables = {
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
