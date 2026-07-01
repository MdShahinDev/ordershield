export const INITIAL_LOGS = [
  {
    id: 'LOG-3091',
    timestamp: 'Just now',
    ip: '194.165.16.82',
    phone: '+1 (555) 019-2831',
    country: 'DE',
    status: 'Blocked',
    reason: 'IP blacklisted on spam database',
    attempts: 4,
    orderValue: '$189.00'
  },
  {
    id: 'LOG-3090',
    timestamp: '2 mins ago',
    ip: '82.202.112.5',
    phone: '+44 (0) 7700 900077',
    country: 'RU',
    status: 'Restricted',
    reason: 'Exceeded allowed attempts (3/3)',
    attempts: 3,
    orderValue: '$45.50'
  },
  {
    id: 'LOG-3089',
    timestamp: '15 mins ago',
    ip: '45.138.144.12',
    phone: '+1 (555) 014-9921',
    country: 'US',
    status: 'Suspicious',
    reason: 'High velocity order rate (IP)',
    attempts: 2,
    orderValue: '$320.00'
  },
  {
    id: 'LOG-3088',
    timestamp: '1 hour ago',
    ip: '109.252.32.14',
    phone: '+1 (555) 012-4455',
    country: 'CN',
    status: 'Blocked',
    reason: 'Disposable VoIP number detected',
    attempts: 1,
    orderValue: '$1,240.00'
  },
  {
    id: 'LOG-3087',
    timestamp: '3 hours ago',
    ip: '192.168.1.1',
    phone: '+1 (555) 018-9900',
    country: 'US',
    status: 'Allowed',
    reason: 'Whitelisted customer email match',
    attempts: 1,
    orderValue: '$98.00'
  }
];

export const INITIAL_WHITELIST= [
  { id: 'W-1', value: '162.254.206.12', type: 'IP', addedAt: '2026-06-25' },
  { id: 'W-2', value: 'premium-vip@gmail.com', type: 'Email', addedAt: '2026-06-26' },
  { id: 'W-3', value: '73.23.45.191', type: 'IP', addedAt: '2026-06-28' },
  { id: 'W-4', value: 'agency-partner@company.com', type: 'Email', addedAt: '2026-06-29' }
];

export const INITIAL_BLOCKLIST = [
  { id: 'B-1', value: '185.220.101.5', type: 'IP', addedAt: '2026-06-24', reason: 'Known Tor exit node' },
  { id: 'B-2', value: 'spammer-scam@yandex.ru', type: 'Email', addedAt: '2026-06-25', reason: 'High chargeback risk' },
  { id: 'B-3', value: '+7 (999) 111-2233', type: 'Phone', addedAt: '2026-06-27', reason: 'Fake payment spammer' },
  { id: 'B-4', value: '45.89.231.114', type: 'IP', addedAt: '2026-06-29', reason: 'Malicious proxy botnet' }
];

export const DEFAULT_SETTINGS= {
  isEnabled: true,
  restrictionHours: 24,
  allowedAttempts: 3,
  confirmedStatus: 'completed',
  debugLogging: true,
  popupMessage: '🛡️ Order Blocked: High velocity or suspicious activity detected. Please contact support.',
  fbSupportUrl: 'https://m.me/ordershield.wp'
};

export const FAQ_DATA = [
  {
    question: 'How does Order Shield detect fake orders in WooCommerce?',
    answer: 'Order Shield implements multi-layered security checks the moment a customer clicks "Place Order". It checks the customer\'s IP address against known VPN, proxy, and hosting providers. It then validates the billing phone number format, checks your custom restriction windows for purchase limits, analyzes allowed billing attempts, and references your local and cloud Whitelist/Blocklist directories before allowing the transaction to process.'
  },
  {
    question: 'Does this slow down my checkout experience?',
    answer: 'No, absolutely not. All checks run in milliseconds using optimized database queries and localized IP range mapping. There are no external blocking APIs that would lag your checkout page, ensuring your conversion rates remain fully optimized while securing your store.'
  },
  {
    question: 'What happens when a legitimate customer is blocked accidentally?',
    answer: 'In the rare event a genuine order is flagged, you have full control. You can customize the user-facing warning popup, log their action in detail, and even display a direct link to your customer service (e.g., your Facebook Messenger support URL). Additionally, you can whitelist their IP or billing phone no with a single click inside the admin dashboard to prevent future flags.'
  },
  {
    question: 'Can I export my blocklists and logs?',
    answer: 'Yes! Order Shield includes full CSV export capabilities for blocklists, whitelists, and logs. This allows you to sync blocks across multiple WooCommerce installations easily or parse the log records in Excel or third-party analysis tools.'
  },
  {
    question: 'Is Order Shield compliant with GDPR and privacy regulations?',
    answer: 'Yes, absolutely. Order Shield stores security logs locally in your self-hosted WordPress database. You can customize data retention schedules, and fully control what data is saved inside your admin control panel under the Data Control section.'
  },
  {
    question: 'What is the Restriction Window feature?',
    answer: 'The Restriction Window allows you to prevent rapid serial orders from the same user or IP. For example, if you set a 24-hour window with 3 allowed attempts, any single IP trying to place a 4th order within that day will be blocked automatically. This completely stops card testing attacks and rapid spam checkouts.'
  }
];

export const TIMELINE_STEPS = [
  {
    title: 'Customer Places Order',
    subtitle: 'Step 01: Inception',
    description: 'The buyer enters checkout details and triggers the WooCommerce submit event.',
    status: 'info'
  },
  {
    title: 'IP Intelligence Check',
    subtitle: 'Step 02: Network Integrity',
    description: 'We evaluate the IP address to detect active Proxies, VPNs, Tor exit nodes, and botnet clusters.',
    status: 'success'
  },
  {
    title: 'Billing Phone Validation',
    subtitle: 'Step 03: Identity Check',
    description: 'Checks phone structure, carrier type, virtual VoIP routing, and blacklisted numbers.',
    status: 'success'
  },
  {
    title: 'Restriction Window Check',
    subtitle: 'Step 04: Velocity Control',
    description: 'Compares previous order history from this IP/User against your allowed limits within the designated timeframe.',
    status: 'success'
  },
  {
    title: 'Whitelist / Blocklist Check',
    subtitle: 'Step 05: Authority Matching',
    description: 'Bypasses verification for whitelisted emails/IPs and blocks matches from blocklists immediately.',
    status: 'success'
  },
  {
    title: 'Final Shield Decision',
    subtitle: 'Step 06: Enforcement',
    description: 'The order is either safely processed or securely rejected with your custom notification message.',
    status: 'success'
  }
];

export const FEATURES_DATA = [
  {
    title: 'Smart IP Tracking',
    description: 'Scan client connection details in real-time. Block proxies, hosting servers, and VPNs automatically with accurate geographic mapping.',
    icon: 'Globe',
    badge: 'Real-time'
  },
  {
    title: 'Phone Validation',
    description: 'Validate billing phone number formatting and detect disposable, virtual VoIP numbers used by fraudsters to bypass standard verifications.',
    icon: 'PhoneCall'
  },
  {
    title: 'Restriction Window',
    description: 'Prevent high-frequency spam floods by establishing temporal block periods for rapid purchase attempts.',
    icon: 'Clock',
    badge: 'Most Popular'
  },
  {
    title: 'Allowed Attempts Controller',
    description: 'Limit the maximum checkout actions allowed per user, IP, and profile. Instantly flag and restrict users who hit the ceiling.',
    icon: 'Sliders'
  },
  {
    title: 'Smart Whitelist',
    description: 'Keep your VIP buyers moving. Whitelist reliable IPs, customer billing phone no, so they never trigger security alerts.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Comprehensive Blocklist',
    description: 'Instantly lock out malicious actors. Block specific IPs, subnets, and phone numbers in seconds.',
    icon: 'ShieldAlert'
  },
  {
    title: 'Deep Debug Logging',
    description: 'See exactly why checkouts fail. Track every single transaction step, database verification, and validation state with rich details.',
    icon: 'Terminal',
    badge: 'Developer friendly'
  },
  {
    title: 'One-Click CSV Export',
    description: 'Easily export security records, IP logs, whitelist collections, and active blocklists to standard CSV for spreadsheets or backups.',
    icon: 'Download'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Track blocked fraud volume, clean transactions, blocked checkouts, and system health status with beautiful visual charts directly in WordPress.',
    icon: 'BarChart3'
  }
];

export const COMPARISON_ROWS = [
  {
    feature: 'IP Tracking & VPN Detection',
    withoutShield: '❌ No blocking; high chargebacks from cheap VPNs',
    withShield: '⚡ Advanced threat database integration & Proxy block',
    isPositive: true
  },
  {
    feature: 'Phone Number Filtering',
    withoutShield: '❌ Fake, invalid, or temporary VoIP numbers accepted',
    withShield: '⚡ Restricts virtual numbers, validates country matching',
    isPositive: true
  },
  {
    feature: 'Velocity & Card Testing Block',
    withoutShield: '❌ Left vulnerable to hundreds of micro-transactions',
    withShield: '⚡ Dynamic restriction windows with allowed attempt limits',
    isPositive: true
  },
  {
    feature: 'Whitelist & Blocklist Manager',
    withoutShield: '❌ Manual refunding of spam; high friction',
    withShield: '⚡ One-click whitelist of VIPs, permanent blocks for hackers',
    isPositive: true
  },
  {
    feature: 'Exportable Logs',
    withoutShield: '❌ Scattered transaction metadata with no context',
    withShield: '⚡ Full CSV database export of IP, country, and reasons',
    isPositive: true
  },
  {
    feature: 'Server Impact & Load',
    withoutShield: '❌ High spam requests overload database connections',
    withShield: '⚡ Microsecond checks, zero impact on checkout UX',
    isPositive: true
  },
  {
    feature: 'WooCommerce Compatible',
    withoutShield: '⚠️ Standard checkout allows any input unchecked',
    withShield: '⚡ Seamlessly hooks into WC Checkout events',
    isPositive: true
  }
];
