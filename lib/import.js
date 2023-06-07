import { DateTime } from "luxon";

function tz_convert(event) {
  return DateTime.fromSeconds(event.timestamp).setZone(event.entity.labels[local_timezone]).toUnixInteger()
}