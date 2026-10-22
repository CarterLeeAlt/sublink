/**
 * Rule Set Base URLs
 * Contains base URLs for different rule set providers
 */

// GitHub release assets and jsDelivr's Cloudflare-fronted testingcf host both
// come and go for mainland clients, while the reachability of a mirror prefix
// does not depend on which upstream CDN edge answers. All rule and geodata
// downloads share this prefix so one mirror policy covers every file.
export const GH_PROXY_PREFIX = 'https://gh-proxy.com/';

export const META_RULES_RELEASE_BASE_URL = `${GH_PROXY_PREFIX}https://github.com/MetaCubeX/meta-rules-dat/raw/release/`;

export const SITE_RULE_SET_BASE_URL = `${GH_PROXY_PREFIX}https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/sing/geo/geosite/`;
export const IP_RULE_SET_BASE_URL = `${GH_PROXY_PREFIX}https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/sing/geo/geoip/`;
export const CLASH_SITE_RULE_SET_BASE_URL = `${GH_PROXY_PREFIX}https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/`;
export const CLASH_IP_RULE_SET_BASE_URL = `${GH_PROXY_PREFIX}https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/`;
export const SURGE_SITE_RULE_SET_BASEURL = `${GH_PROXY_PREFIX}https://github.com/NSZA156/surge-geox-rules/raw/refs/heads/release/geo/geosite/`
export const SURGE_IP_RULE_SET_BASEURL = `${GH_PROXY_PREFIX}https://github.com/NSZA156/surge-geox-rules/raw/refs/heads/release/geo/geoip/`
