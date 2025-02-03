import fetch from 'node-fetch';

test("GET to /api/v1/status should return status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.text(); // Read the body as text first

  if (response.status !== 200) {
    console.error("Response status:", response.status);
    console.error("Response body:", responseBody); // Log the text body
  }

  expect(response.status).toBe(200);

  const jsonResponse = JSON.parse(responseBody); // Parse the text body as JSON
  expect(jsonResponse.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(jsonResponse.updated_at).toISOString();
  expect(jsonResponse.updated_at).toEqual(parsedUpdatedAt);
});
```

{
  "type": "module",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^27.0.0",
    "node-fetch": "^3.0.0"
  }
}