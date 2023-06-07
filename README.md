--- WIP ---

--- Do not use in PRODUCTION ---

This is Luxon (https://github.com/moment/luxon) packaged for use in Sensu as an Asset.

It allows you to do all sorts of time manipulation and filtering.


https://docs.sensu.io/sensu-go/latest/observability-pipeline/observe-filter/filters/#filter-for-events-during-office-hours-only

      timestamp is in UTC
      "hour(event.timestamp) >= 9 && hour(event.timestamp) <= 17"

      Allows you to create filters to match timezone:
      "hour(DateTime.fromSeconds(event.timestamp).setZone("Europe/Copenhagen")) >= 9 && hour(DateTime.fromSeconds(event.timestamp).setZone("Europe/Copenhagen")) <= 17"
