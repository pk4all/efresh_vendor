const fs = require('fs');
const content = fs.readFileSync('e:/projects/vendor_app/efresh-supplier-portal-desktop-v2.html', 'utf8');
const pages = ['page-invoices', 'page-deliveries', 'page-account'];

pages.forEach(page => {
  const startIndex = content.indexOf(`id="${page}"`);
  if (startIndex === -1) {
    console.log(`Page ${page} not found`);
    return;
  }
  const endIndex = content.indexOf('</section>', startIndex);
  const html = content.substring(content.lastIndexOf('<section', startIndex), endIndex + 10);
  fs.writeFileSync(`e:/projects/vendor_app/${page}.html`, html);
});
console.log('Done extracting pages');
