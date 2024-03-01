import http from 'k6/http';
import { sleep, check } from 'k6';
/**
 * 
 *    Performance test script to simulate real time traffic with combination
 *  of ramping vus and constant vu with slep time.
 * 
 *    
 */
export const options = {
  discardResponseBodies: true,
  scenarios: {
    orders: {
        executor: 'ramping-vus',
        startVUs: 0,
        exec: 'checkOrders',
        stages: [
          { duration: '20s', target: 10 },
          { duration: '10s', target: 0 },
        ],
        gracefulRampDown: '0s',
    },
    review: {
      executor: 'constant-vus',
      exec: 'checkReviews',
      vus: 5,
      duration: '30s',
    },
  },
};

export function checkOrders() {
  http.get('https://test.k6.io/contacts.php', {
    tags: { my_custom_tag: 'orders' },
  });
}

export function checkReviews() {
  http.get('https://test.k6.io/news.php', { tags: { my_custom_tag: 'review' } });
  sleep(1)
}
