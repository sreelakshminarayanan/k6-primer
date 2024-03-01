import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter, Gauge, Trend, Rate} from 'k6/metrics';

const http403StatusCounter = new Counter("http403StatusCounter");
const http200StatusCounter = new Counter("http200StatusCounter");
const customTrend = new Trend("custom_duration");
const customGauge = new Gauge("custom_gauge");
const customRate = new Rate("custom_rate");
export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,
  // A string specifying the total duration of the test run.
  duration: '1s',
};


/**
 *  This code is to explain custom metrics can be built in k6 based on user 
 *  define scenarios
 */
export default function() {
  const res = http.get('https://test.k6.io');
  check(res, {
    'is status 200':  r => r.status ==200
  });
  customTrend.add(res.timings.duration)
  if (res.status === 200 ) {
    http200StatusCounter.add(1);
  } else if ( res.status === 403) {
    http403StatusCounter.add(1);
  }
  sleep(1);
}
