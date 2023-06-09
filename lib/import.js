import DateTime from 'https://cdn.jsdelivr.net/npm/luxon/+esm';

function to_localtimezone(event) {
  return DateTime.fromSeconds(event.timestamp).setZone(event.entity.metadata.labels[local_timezone]).toUnixInteger()
}