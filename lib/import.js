import { DateTime } from "luxon";

function to_localtimezone(event) {
  return luxon.DateTime.fromSeconds(event.timestamp).setZone(event.entity.metadata.labels[local_timezone]).toUnixInteger()
}