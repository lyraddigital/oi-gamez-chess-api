import { RoomEvent } from "./room-event";

export interface RoomCreatedEvent extends RoomEvent {
  hostUsername: string;
}
