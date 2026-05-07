# Application Load Balancer (ALB) Configuration

## Load Balancer Details

- Name: `ci-cd-alb`
- Type: `Application Load Balancer`
- Scheme: `Internet-facing`
- Listener Protocol: `HTTP`
- Listener Port: `80`

---

# Listener Rules

## Frontend Rule

| Path | Target Group |
|------|--------------|
| `/`  | `front-tg` |

Frontend serves the React application through Nginx on port `80`.

---

## Backend Rule

| Path | Target Group |
|------|--------------|
| `/api/*` | `backe-tg` |

Backend serves Node.js APIs on port `3000`.

---

# Target Groups

## Frontend Target Group

| Property | Value |
|----------|-------|
| Name | `front-tg` |
| Protocol | `HTTP` |
| Port | `80` |
| Target Type | `IP` |
| Health Check Path | `/` |

---

## Backend Target Group

| Property | Value |
|----------|-------|
| Name | `backe-tg` |
| Protocol | `HTTP` |
| Port | `3000` |
| Target Type | `IP` |
| Health Check Path | `/api/health` |

---

# ECS Service Mapping

## Frontend Service

| Setting | Value |
|---------|------|
| Container Name | `frontend` |
| Container Port | `80` |
| Target Group | `front-tg` |

---

## Backend Service

| Setting | Value |
|---------|------|
| Container Name | `backend` |
| Container Port | `3000` |
| Target Group | `backe-tg` |

---

# Backend Health Route

```js
app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});
```

---

# Security Group Rules

## ALB Security Group

### Inbound Rules
- HTTP (`80`) from `0.0.0.0/0`

### Outbound Rules
- Allow all traffic

---

## ECS Service Security Group

### Inbound Rules
- Port `80` from ALB Security Group (Frontend)
- Port `3000` from ALB Security Group (Backend)

### Outbound Rules
- Allow all traffic

---

# Architecture Flow

```text
Internet
   │
   ▼
Application Load Balancer (ALB)
   │
   ├── /        ──► Frontend Service (Nginx :80)
   │
   └── /api/*  ──► Backend Service (Node.js :3000)
```

---

# Health Check Verification

## Frontend Health Check

```bash
http://<ALB-DNS>/
```

---

## Backend Health Check

```bash
http://<ALB-DNS>/api/health
```

Expected Response:

```text
OK
```