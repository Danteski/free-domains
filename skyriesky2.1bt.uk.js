
// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: '...', // describe your project in this field
  domain: '1bt.uk', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'skyriesky2', // desired subdomain name
  owner: {
    repo: 'https://github.com/Danteski/free-domains.git',
    email: 'dantetrensetta@gmail.com',
  },
  record: {
    CNAME: 'Danteski.github.io', // e.g.: <your-github-account>.github.io
    TXT: [ '_github-pages-challenge-Danteski.skyriesky2.1bt.uk', '579f949070245aaf619bc54108dcce'],
    A: ['198.51.44.4', '198.51.45.4', '198.51.44.68', '198.51.45.68'],
    //AAAA: ['list', 'of', 'IPv6', 'addresses', 'like', 'a', '::1'],
    NS: ['dns1.p04.nsone.net', 'dns2.p04.nsone.net', 'dns3.p04.nsone.net', 'dns4.p04.nsone.net'],
  },
  proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
