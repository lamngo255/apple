import iphones from './iphones';
import airpods from './airpods';
import ipads from './ipads';
import macbooks from './macbooks';
import watches from './watches';

export default {
  ...iphones,
  ...ipads,
  ...airpods,
  ...macbooks,
  ...watches,
};
