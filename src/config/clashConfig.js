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
		'fake-ip-range': '198.18.0.1/16',
		'fake-ip-filter-mode': 'blacklist',

		// Only used to resolve hostnames of DNS servers. Every resolver below is
		// an IP literal, and keeping this domestic means it can stay unreachable-
		// free while bootstrap never becomes a leak path on its own.
		'default-nameserver': [
			'223.5.5.5',
			'223.6.6.6'
		],
		'fake-ip-filter': [
			// Local / LAN
			'localhost',
			'localhost.*',
			'+.lan',
			'+.local',
			'+.home.arpa',
			'+.in-addr.arpa',
			'+.ip6.arpa',
		
			// Windows / Apple check
			'+.msftconnecttest.com',
			'+.msftncsi.com',
			'captive.apple.com',
		
			// China-friendly time sync
			'time.*.apple.com',
			'time-ios.apple.com',
			'time1.cloud.tencent.com',
			'ntp.aliyun.com'
		],
		// Default resolver for every name the rules do not classify. It must stay
		// outside mainland China: a domestic resolver here answers A/AAAA queries
		// for unlisted domains, which is what DNS leak tests observe.
		'nameserver': [
			'https://1.1.1.1/dns-query',
			'https://1.0.0.1/dns-query'
		],
		// Resolves the proxy nodes' own hostnames. Domestic resolvers answer
		// fastest and keep node bootstrap independent from foreign reachability.
		'proxy-server-nameserver': [
			'https://223.5.5.5/dns-query',
			'https://223.6.6.6/dns-query'
		],
		'nameserver-policy': {
			// Domestic and private names resolve domestically, so CDN geolocation
			// and fake-ip exemptions keep working.
			'geosite:cn,private': [
				'https://223.5.5.5/dns-query',
				'https://223.6.6.6/dns-query'
			],
			// Known-foreign names resolve abroad, which keeps their answers clean.
			'geosite:geolocation-!cn': [
				'https://1.1.1.1/dns-query',
				'https://1.0.0.1/dns-query'
			]
		},
		// DIRECT traffic would otherwise fall back to `nameserver` and resolve
		// domestic sites through a foreign resolver, yielding wrong CDN nodes.
		'direct-nameserver': [
			'https://223.5.5.5/dns-query',
			'https://223.6.6.6/dns-query'
		],
		'direct-nameserver-follow-policy': true
	},
	'proxies': [],
	'proxy-groups': []
};
