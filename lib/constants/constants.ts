interface HandlerFilePaths {
  roomEventsSubscriber: string;
}

interface HandlerFunctionNames {
  roomEventsSubscriber: string;
}

enum EnvironmentVariableNames {
  roomReceiveEventBusName = "ROOM_RECEIVE_EVENT_BUS_NAME",
  roomReceiveEventBusEventSourceName = "ROOM_RECEIVE_EVENT_BUS_EVENT_SOURCE_NAME",
}

interface RoomEventsSubscriberEnvironmentVariables {
  roomReceiveEventBusName: string;
  roomReceiveEventBusEventSourceName: string;
}

interface EnvironmentVariables {
  roomEventsSubscriber: RoomEventsSubscriberEnvironmentVariables;
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
    roomReceiveEventBusName: EnvironmentVariableNames.roomReceiveEventBusName,
    roomReceiveEventBusEventSourceName:
      EnvironmentVariableNames.roomReceiveEventBusEventSourceName,
  },
};
