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

```

### GET /sensors/{sensorId}

Returns metadata for a single sensor.

## Latest Reading

### GET /sensors/{sensorId}/latest
Return the latest value for a sensor.

## Raw Time Series

### GET /sensors/{sensorId}/timeseries

**Query parameters**:

## Aggregated Metrics
### GET /sensors/{sensorId}/aggregates


# Authentication
For now, since it's a toy project, endpoints are public.
Future extension: API key or JWT. 

