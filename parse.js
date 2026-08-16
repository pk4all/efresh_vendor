const fs = require('fs');
const content = fs.readFileSync('e:/projects/vendor_app/efresh-supplier-portal-desktop-v2.html', 'utf8');
const regex = /<section[^>]*class="[^"]*page[^"]*"[^>]*id="([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1]);
}
