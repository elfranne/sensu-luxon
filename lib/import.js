import DateTime from './lib/luxon.js';

function to_localtimezone(event) {
  import(DateTime)
  return DateTime.fromSeconds(event.timestamp).setZone(event["entity"]["metadata"]["labels"]["local_timezone"]).toUnixInteger()
}