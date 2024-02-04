interface HandlerFilePaths {
  roomEventsSubscriber: string;
}

interface HandlerFunctionNames {
  roomEventsSubscriber: string;
}
export const HandlerFilePaths: HandlerFilePaths = {
  roomEventsSubscriber:
    "../../../lambda/handlers/subscribers/room-events-subscriber/src/index.ts",
};

export const HandlerFunctionNames: HandlerFunctionNames = {
  roomEventsSubscriber: "handler",
};
