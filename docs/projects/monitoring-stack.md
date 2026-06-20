# Monitoring Stack

Prometheus and Grafana monitoring stack for the BookStore API and Conduit Backend, deployed on a Hetzner VM.

## Table of Contents

- [Overview](#overview)
- [Preview](#preview)
- [Quickstart](#quickstart)
- [Targets](#targets)
- [Grafana Dashboards](#grafana-dashboards)
- [Troubleshooting](#troubleshooting)

---

## Overview

| Service    | Port | Description                    |
|------------|------|--------------------------------|
| Prometheus | 9090 | Metrics collection and storage |
| Grafana    | 3000 | Visualization and dashboards   |

Prometheus scrapes metrics every 15 seconds from both services.

---

## Preview

  ![Grafana Dashboard](/img/grafana-monitoring.png)

## Quickstart

1. Clone this repository:

```bash
git clone git@github.com:A-Marbach/monitoring-stack.git
cd monitoring-stack
```

2. Start the stack:

```bash
docker compose up -d
```

3. Open Grafana:

```
http://<your-server-ip>:3000
```

Default credentials: `admin / admin`

---

## Targets

Configured in `prometheus/prometheus.yml`:

| Job             | Target              | Endpoint |
|-----------------|---------------------|----------|
| bookstore-api   | `your-server-ip:8080`:8080 | /metrics |
| conduit-backend | `your-server-ip:8080`:5000 | /metrics |

Check target status:

```bash
curl http://`your-server-ip:8080:9090/api/v1/targets
```

---

## Grafana Dashboards

### BookStore API

- Memory Usage (`process_resident_memory_bytes`)
- CPU Usage (`rate(process_cpu_seconds_total[1m])`)

### Conduit Backend

- Memory Usage (`process_resident_memory_bytes{job="conduit-backend"}`)
- CPU Usage (`rate(process_cpu_seconds_total{job="conduit-backend"}[1m])`)

---

## Troubleshooting

### Prometheus target is down

```bash
curl http://`your-server-ip:8080`:8080/metrics
curl http://`your-server-ip:8080`:5000/metrics
```

### Grafana not reachable

```bash
sudo ufw allow 3000
sudo ufw allow 9090
```

### View logs

```bash
docker logs monitoring-stack-prometheus-1
docker logs monitoring-stack-grafana-1
```
