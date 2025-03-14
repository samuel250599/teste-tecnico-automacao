import { check } from 'k6';
import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '3m', target: 500 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.1'],
  },
};

export function handleSummary(data) {
  return {
    "load-tests/reports/load-test-report.html": htmlReport(data),
  };
}

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts');
  check(res, {
    'Status 200': (r) => r.status === 200,
    'Tem dados': (r) => JSON.parse(r.body).length > 0,
  });
}