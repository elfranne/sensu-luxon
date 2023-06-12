
function to_localtimezone(event) {
  return require('/lib/luxon.js').DateTime.fromSeconds(event["timestamp"]).setZone(event["entity"]["metadata"]["labels"]["local_timezone"]).toUnixInteger();
}

export const to_localtimezone = to_localtimezone;

