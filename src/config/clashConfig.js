/**
 * Clash Configuration
 * Base configuration template for Clash client
 */

export const CLASH_CONFIG = {
	'port': 7890,
	'socks-port': 7891,
	'allow-lan': false,
	'mode': 'rule',
	'log-level': 'info',
	'unified-delay': true,
	'tcp-concurrent': true,
	'geodata-mode': true,
	'geo-auto-update': true,
	'geodata-loader': 'standard',
	'geo-update-interval': 24,
	'geox-url': {
		'geoip': "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat",
		'geosite': "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",
		'mmdb': "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb",
		'asn': "https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb"
	},
	'rule-providers': {
		// 将由代码自动生成
	},
	'dns': {
		'enable': true,
		'ipv6': true,
		'respect-rules': true,
		'enhanced-mode': 'fake-ip',

		'default-nameserver': [
			'223.5.5.5',
			'223.6.6.6'
		],
		'fake-ip-filter': [
			// Local / LAN
			'*.lan',
			'*.local',
			'localhost',
			'localhost.*',
			'+.local',
			'+.lan',
			'+.home.arpa',
			'+.in-addr.arpa',
			'+.ip6.arpa',
			
			// Router / captive portal
			'+.msftconnecttest.com',
			'+.msftncsi.com',
			'connectivitycheck.gstatic.com',
			'connectivitycheck.android.com',
			'clients3.google.com',
			'captive.apple.com',

			// NTP / time sync
			'time.*.com',
			'time.*.gov',
			'time.*.edu.cn',
			'time.*.apple.com',
			'time-ios.apple.com',
			'time1.cloud.tencent.com',
			'ntp.*.com',
			'ntp.aliyun.com',
			'pool.ntp.org',
			'+.pool.ntp.org',
			'time.cloudflare.com',
			'time.windows.com',
			'time.nist.gov',
			'time.google.com',
		],
		'nameserver': [
			'https://223.5.5.5/dns-query',
			'https://223.6.6.6/dns-query'
		],
		'proxy-server-nameserver': [
			'https://223.5.5.5/dns-query',
			'https://223.6.6.6/dns-query'
		],
		'nameserver-policy': {
			'geosite:cn,private': [
				'https://223.5.5.5/dns-query',
				'https://223.6.6.6/dns-query'
			],
			'geosite:geolocation-!cn': [
				'https://dns.cloudflare.com/dns-query',
				'https://cloudflare-dns.com/dns-query'
			]
		}
	},
	'proxies': [],
	'proxy-groups': []
};
