import { decodeURIComponent as gulujsDecodeURIComponent } from './index.js';
import fastDecodeURIComponent from 'fast-decode-uri-component';

const short = encodeURIComponent('tést💩🇺🇸');
const medium = short.repeat(500);
const long = medium.repeat(500);

console.time('Short String (native)')
for (let i = 0; i < 100000; i++) {
  decodeURIComponent(short);
}
console.timeEnd('Short String (native)')

console.time('Short String (gulujs)')
for (let i = 0; i < 100000; i++) {
  gulujsDecodeURIComponent(short);
}
console.timeEnd('Short String (gulujs)')

console.time('Short String (fast)')
for (let i = 0; i < 100000; i++) {
  fastDecodeURIComponent(short);
}
console.timeEnd('Short String (fast)')


console.time('Medium String (native)')
for (let i = 0; i < 10000; i++) {
  decodeURIComponent(medium);
}
console.timeEnd('Medium String (native)')

console.time('Medium String (gulujs)')
for (let i = 0; i < 10000; i++) {
  gulujsDecodeURIComponent(medium);
}
console.timeEnd('Medium String (gulujs)')

console.time('Medium String (fast)')
for (let i = 0; i < 10000; i++) {
  fastDecodeURIComponent(medium);
}
console.timeEnd('Medium String (fast)')


console.time('Long String (native)')
for (let i = 0; i < 10; i++) {
  decodeURIComponent(long);
}
console.timeEnd('Long String (native)')

console.time('Long String (gulujs)')
for (let i = 0; i < 10; i++) {
  gulujsDecodeURIComponent(long);
}
console.timeEnd('Long String (gulujs)')

console.time('Long String (fast)')
for (let i = 0; i < 10; i++) {
  fastDecodeURIComponent(long);
}
console.timeEnd('Long String (fast)')