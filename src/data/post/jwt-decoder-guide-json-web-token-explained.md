---
title: 'JWT Decoder Guide: Understanding JSON Web Tokens'
excerpt: 'Learn what JSON Web Tokens (JWT) are, how they work, and how to decode them. Understand the header, payload, and signature with examples.'
publishDate: 2026-05-28
category: 'Developer Tools'
tags:
  - jwt
  - authentication
  - security
  - web development
  - api
author: 'QuickToolFlow'
---

JSON Web Tokens are the backbone of modern web authentication. If you work with APIs, single sign-on, or any authentication system, you have encountered JWTs.

This guide explains what JWTs are, how they are structured, how to decode them, and what to look out for.

To inspect a real token while following along, use the [JWT Decoder](/tools/jwt-decoder/). For the underlying encoding layer, the [Base64 Encoder and Decoder](/tools/base64/) can help you understand how token sections are represented as text.

---

## What Is a JWT?

A **JWT** (pronounced "jot") is a compact, URL-safe token format for securely transmitting information between two parties. It is defined in [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519).

A JWT looks like this:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

It has three parts separated by dots: **Header . Payload . Signature**.

---

## The Three Parts of a JWT

### Header

The header contains metadata about the token:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- `alg` — The signing algorithm (`HS256`, `RS256`, `ES256`, etc.)
- `typ` — The token type (always `"JWT"`)

### Payload

The payload contains the claims — the actual data being transmitted:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

Common registered claims:

| Claim | Name       | Purpose                                       |
| ----- | ---------- | --------------------------------------------- |
| `sub` | Subject    | The user ID or unique identifier              |
| `iss` | Issuer     | Who issued the token                          |
| `aud` | Audience   | Who the token is intended for                 |
| `exp` | Expiration | When the token expires (Unix timestamp)       |
| `nbf` | Not Before | When the token becomes valid (Unix timestamp) |
| `iat` | Issued At  | When the token was issued (Unix timestamp)    |
| `jti` | JWT ID     | A unique identifier for the token             |

You can also include custom claims like `name`, `email`, `roles`, and `permissions`.

### Signature

The signature is created by combining the encoded header and payload with a secret key using the algorithm specified in the header:

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

The signature ensures the token has not been tampered with.

---

## How JWT Authentication Works

1. **User logs in** — The server verifies credentials (username and password).
2. **Server creates a JWT** — The server encodes the user data into a JWT with an expiration time.
3. **Client stores the JWT** — The browser stores it in a cookie or `localStorage`.
4. **Client sends the JWT** — On each request, the client includes the JWT in the Authorization header: `Authorization: Bearer <token>`.
5. **Server verifies the JWT** — The server checks the signature and expiration. If valid, the request proceeds.

---

## How to Decode a JWT

JWTs use Base64Url encoding (not standard Base64). To decode manually:

1. Split the token at the dots.
2. Take each part and convert from Base64Url to regular Base64 (replace `-` with `+` and `_` with `/`).
3. Add padding (`=`) if needed.
4. Decode from Base64 to get the JSON string.
5. Parse the JSON.

### JavaScript

```javascript
function decodeJwt(token) {
  var parts = token.split('.');
  var payload = parts[1];
  var decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
  return JSON.parse(decoded);
}
```

### Python

```python
import base64
import json

def decode_jwt(token):
    payload = token.split('.')[1]
    padding = 4 - len(payload) % 4
    payload += '=' * padding
    decoded = base64.urlsafe_b64decode(payload)
    return json.loads(decoded)
```

### PHP

```php
$token = 'eyJhbGciOiJIUzI1NiIs...';
$parts = explode('.', $token);
$payload = $parts[1];
$payload = str_replace(['-', '_'], ['+', '/'], $payload);
$payload .= str_repeat('=', 4 - strlen($payload) % 4);
$decoded = base64_decode($payload);
$data = json_decode($decoded, true);
print_r($data);
```

---

## Security Considerations

**Never trust the payload without verification**
Decoding a JWT does not mean it is valid. Anyone can decode and read a JWT because the payload is only Base64 encoded, not encrypted. Never store sensitive information like passwords in the payload.

**Always verify the signature**
The signature is the only part that ensures the token is authentic. Use your server's secret key to verify the signature before trusting any claims.

**Use strong algorithms**

- `HS256` (HMAC with SHA-256) — Good for most applications with a strong secret key.
- `RS256` (RSA with SHA-256) — Better for distributed systems where you need separate signing and verification keys.
- `none` algorithm — Some older libraries accept tokens with no signature. Always reject these.

**Set short expiration times**
Access tokens should expire quickly (15 minutes to 1 hour). Use refresh tokens for longer sessions.

**Avoid `localStorage` for sensitive apps**
`localStorage` is vulnerable to XSS attacks. For sensitive applications, store tokens in `HttpOnly` cookies that JavaScript cannot access.

---

## Related QuickToolFlow Tools

- [JWT Decoder](/tools/jwt-decoder/) for inspecting token headers, payloads, claims, and expiration.
- [Base64 Encoder and Decoder](/tools/base64/) for learning how encoded token sections work.
- [Timestamp Converter](/tools/timestamp-converter/) for checking `exp`, `iat`, and `nbf` claim values.

## Conclusion

JWTs are a powerful and widely used authentication mechanism. Understanding their structure — header, payload, and signature — helps you implement secure authentication, debug token issues, and avoid common security mistakes. Always verify signatures on the server side, set short expiration times, and never trust the decoded payload without verification.
