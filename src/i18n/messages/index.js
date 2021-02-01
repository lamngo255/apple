import sgEn from './sg_en.json';

const messages = {};

if (process.env.REGION === 'sg') {
  messages.sg_en = sgEn;
}

export default messages;
