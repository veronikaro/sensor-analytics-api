# API contract specification

Sensor Analytics API provides read-only access to sensor metadata and time-series data stored in PostgreSQL.
**No data ingestion** (writing) is performed here - this is handled by a separate FastAPI application (link). 
The API is fully read-only.
Aggregations are computed by PostgreSQL via SQL.
All responses are typed using TypeScript DTOs.

# API Structure

Base URL:
`/api/v1`
Resource hierarchy:
```
/sensors
/sensors/:sensorId
/sensors/:sensorId/latest
/sensors/:sensorId/timeseries
/sensors/:sensorId/aggregates
```
All responses are **JSON**. Timestamps follow ISO 8601 standard.

## Sensors

### GET /sensors
Returns metadata for all sensors

**Response 200**
```json
{
  "sensors": [
    {
      "id": 1,
      "deviceId": "pi_001",
      "name": "Outdoor Temperature",
      "type": "temperature",
      "unit": "°C"
    },
  ]
}
```

### GET /sensors/{sensorId}

Returns metadata for a single sensor.

**Response 200**
```json
  {
    "id": 1,
    "deviceId": "pi_001",
    "name": "Outdoor Temperature",
    "type": "temperature",
    "unit": "°C"
  }
```

**Errors:**
- 404 - sensor not found

## Latest Reading

### GET /sensors/{sensorId}/latest
Return the latest value for a sensor.

**Response 200**
```json
  {
    "sensorId": 1,
    "name": "Outdoor Temperature",
    "type": "temperature",
    "unit": "°C",
    "latestValue": 22.5,
    "timestamp": "2025-12-01T12:00:00Z"
  }
```

## Raw Time Series

### GET /sensors/{sensorId}/timeseries

**Query parameters**:

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `from` | ISO String | yes | start timestamp |
| `to` | ISO String | yes | end timestamp |
| `order` | String ("asc" or "desc") | no; by default "asc" | sorting order |

## Aggregated Metrics
### GET /sensors/{sensorId}/aggregates


# Authentication
For now, since it's a toy project, endpoints are public.
Future extension: API key or JWT. 

