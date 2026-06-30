export const DOCS_SECTIONS = [
  {
    id: 'welcome',
    category: 'Getting Started',
    title: '1. Welcome to OrderShield',
    content: `# Welcome to OrderShield

OrderShield is an enterprise-grade, high-performance security and fraud prevention plugin engineered specifically for WordPress WooCommerce stores. Designed to run locally with zero external API dependencies, OrderShield wraps your checkout workflow in a multi-layered verification envelope, intercepting automated spam, duplicate transactions, bot checkout floods, and high-risk card testing attacks before they ever write to your payment processor or transaction ledger.

## Why OrderShield?
Default WooCommerce checkouts are structurally passive. They accept incoming checkout requests without validating network integrity, transaction velocity, or billing metadata velocity. This vulnerability exposes store owners to:
* **Card Testing Frauds:** Automated bots submitting thousands of micro-transactions to verify stolen credit cards, resulting in massive gateway fees and merchant account suspension.
* **Duplicate Checkout Floods:** Double-clicking customers or automated scraper bots submitting duplicate orders in under 5 seconds, causing inventory lockups and payment reconciliation chaos.
* **Fake/Spam Lead Orders:** Bad actors checking out using disposable, temporary, or non-existent phone numbers and proxy IP networks.

OrderShield intercepts these behaviors directly at the server level, maintaining a seamless experience for verified human buyers while permanently locking out malicious actors.

## Key Store Benefits
* **Zero External API Overhead:** Unlike SaaS alternatives, OrderShield evaluates all parameters locally in microseconds. No data is leaked to external databases, and your page speed is unaffected.
* **Reduced Chargeback Fees:** Instantly block card testing runs, preserving your gateway standing and reducing processor penalties.
* **100% Data Sovereignty:** Keeps customer IP addresses, billing phones, and order histories inside your self-hosted WordPress DB, maintaining strict GDPR compliance.

### Compatibility Matrix
| Requirement | Minimum Supported | Recommended Version |
| :--- | :--- | :--- |
| **WordPress** | v6.0+ | v6.4+ (Latest) |
| **WooCommerce** | v8.0+ | v8.6+ (HPOS Mode enabled) |
| **PHP Engine** | v8.0+ | v8.2+ with OPcache |
| **Database Server**| MySQL 5.7+ / MariaDB 10.3+| MySQL 8.0+ / MariaDB 10.6+ |
| **Hosting Mode** | Standard WP / MultiSite | VPS / Managed Cloud Cloud Run |

[Screenshot – High-Level Welcome Dashboard Showcase]`
  },
  {
    id: 'installation',
    category: 'Getting Started',
    title: '2. Installation Guide',
    content: `# Installation Guide

OrderShield installs natively like any standard premium WordPress plugin. Please review the requirements checklist below before activating the plugin on a production environment.

## Server Environment Requirements
Ensure your host satisfies these security and server parameters to prevent permission blocks:
1. **PHP Zip Extension:** Required for automatic update extractions.
2. **Database Privileges:** Your database user must have \`CREATE TABLE\`, \`ALTER\`, and \`INDEX\` privileges to set up the OrderShield velocity caching tables.
3. **HPOS Compatibility:** If using High-Performance Order Storage (HPOS), OrderShield declares compatibility natively.

## Step-by-Step Installation

### Method A: WordPress Admin Dashboard Upload
1. Download the plugin archive (\`order-shield-security-v1.4.2.zip\`) from your dashboard.
2. Log into your WordPress site admin panel (\`/wp-admin\`).
3. Navigate to **Plugins > Add New**.
4. Click the **Upload Plugin** button at the top of the screen.
5. Choose the downloaded ZIP file and click **Install Now**.
6. Once uploaded, click **Activate Plugin**.

### Method B: Manual SFTP Installation
1. Extract the local \`order-shield-security-v1.4.2.zip\` package on your desktop.
2. Connect to your web server using an FTP/SFTP client (such as FileZilla).
3. Navigate to the \`/wp-content/plugins/\` directory.
4. Upload the extracted \`order-shield-security\` folder.
5. Log into the WordPress dashboard, go to **Plugins > Installed Plugins**, and locate **OrderShield**.
6. Click **Activate**.

> ⚠️ **CRITICAL WARNING:** OrderShield depends directly on the core WooCommerce plugin. If WooCommerce is deactivated, OrderShield will automatically safely suspend its hooks to prevent fatal PHP class errors on your site.

## Installation Checklist
* [ ] Verify PHP version is 8.0 or higher.
* [ ] Confirm WooCommerce is active and running v8.0+.
* [ ] Test write permissions on \`/wp-content/plugins/\`.
* [ ] Enable High Performance Order Storage (HPOS) in WooCommerce settings for optimal query performance.

[Screenshot – Installation Page & Plugin Panel]`
  },
  {
    id: 'getting-started',
    category: 'Getting Started',
    title: '3. Getting Started',
    content: `# Getting Started & Initial Configuration

Protect your store in under five minutes. Follow this initial setup protocol to establish your core defenses without introducing friction for legitimate buyers.

## The 5-Minute Setup Guide

### Step 1: Access the Dashboard
After activation, a new top-level menu titled **OrderShield** will appear in your WordPress sidebar. Click this menu to load your central command dashboard.

### Step 2: Enable the Security Core
Toggle the **Global Shield Status** to **ACTIVE**. This instructs the plugin to begin hook monitoring on checkout forms.

### Step 3: Configure Thresholds
We recommend the following conservative parameters for standard stores:
* **Allowed Checkout Attempts:** Set to \`3\` attempts. This permits genuine users to correct minor credit card typoes or billing address errors without trigger blocks.
* **Restriction Velocity Window:** Set to \`24\` hours. Any IP matching 4 attempts inside this period will be flagged.
* **Confirmed Order Status:** Select \`Completed\` and \`Processing\`.

### Step 4: Define the Warning Message
Customize the user-facing alert popup. We recommend:
> \`🛡️ Checkout Restricted: Multiple security flags triggered. Please contact customer support for manual clearance.\`

### Step 5: Save Settings
Click **Save Configurations** at the bottom of the panel. Your store is now protected!

---

## Default vs Recommended Configurations
| Setting | Default Value | Recommended (High-Volume) | Recommended (COD Stores) |
| :--- | :--- | :--- | :--- |
| **Shield Core** | Enabled | Enabled | Enabled |
| **Restriction Hours** | 24 Hours | 12 Hours | 48 Hours |
| **Allowed Attempts** | 3 | 3 | 2 |
| **Status Evaluation** | Completed | Completed, Processing | Completed, Processing, On Hold |
| **Debug Logging** | Disabled | Enabled | Disabled |

[Screenshot – Quick Setup Options Panel]`
  },
  {
    id: 'dashboard-overview',
    category: 'Core Features',
    title: '4. Dashboard Overview',
    content: `# Dashboard Overview & UI Directory

The OrderShield dashboard is engineered for high information density, low cognitive load, and immediate utility. All controls are located on a single-screen responsive panel.

## Dashboard Menu Architecture

### 1. Main Telemetry Hub (Dashboard)
Displays real-time security widgets, total blocked attacks, and saved chargeback fees. Includes the weekly live chart plotting transaction velocity and block count.

### 2. Order IP List
A microsecond-lookup grid displaying every active IP connecting to your checkout page, along with geographical country codes, and immediate action buttons (**Block** or **Whitelist**).

### 3. Whitelist Directory
Lists your trusted VIP buyers, partner agencies, and automated payment webhook IPs. Includes an inline form to append new IPs or emails instantly.

### 4. Blocklist Rules
Your active threat wall. Displays all blocked entities (IP, Email, or Phone Subnets), creation timestamps, and customized reason codes for audit logs.

### 5. Rule Configurations
The core PHP settings engine. Alter restriction windows, attempts threshold, warning popup structures, and debugging level without writing code.

### 6. Developer Logs
A scrolling system output mimicking server logs, displaying live query triggers, security nonces, and checkout evaluation decisions.

### 7. GDPR & Data Control
Manage legal compliance, anonymize logs, configure auto-purge schedules, and manage user deletion queries.

---

## Action Buttons & Functions Quick-Reference
| Button Element | Scope | Action Triggered |
| :--- | :--- | :--- |
| **Download Plugin ZIP** | Navbar | Compiles and initiates download of latest secure zip release. |
| **Interactive Live Demo**| Hero | Activates the browser simulation workspace to mock checkout events. |
| **Add Trusted VIP** | Whitelist | Appends new records with timestamp metadata to the local table. |
| **Lock Out** | Blocklist | Instantly registers target email or phone to database restriction. |
| **Clear Window** | Logs | Empties the real-time logging output window in the browser. |

[Screenshot – Admin Dashboard UI Layout]`
  },
  {
    id: 'settings-doc',
    category: 'Core Features',
    title: '5. Settings Documentation',
    content: `# Settings Documentation & Parameter Guide

Every OrderShield variable is fully documented below. Adjust these parameters to fine-tune your security profile.

---

## 1. Global Enable Switch
* **Purpose:** Globally mounts or unmounts checkout validation hooks.
* **Default Value:** \`Enabled\`
* **Recommended Value:** \`Enabled\`
* **Warning:** Disabling this setting stops all security checks immediately. Active blocks will no longer be enforced, exposing checkout page to direct bot testing.

---

## 2. Restriction Window Period (Hours)
* **Purpose:** The temporal sliding window used to calculate transaction frequency per customer IP.
* **Default Value:** \`24\`
* **Recommended Value:** \`24\`
* **Best Practice:** Keep at \`24\` for standard ecommerce. For physical ticket sales or high-volume limited releases, reduce to \`2\` or \`4\` hours to prevent blocking normal repeat buyers.

---

## 3. Max Allowed Attempts
* **Purpose:** The maximum number of failed checkouts permitted within the Restriction Window before a lockout triggers.
* **Default Value:** \`3\`
* **Recommended Value:** \`3\`
* **Warning:** Setting this to \`1\` will block genuine users who miskey their credit card CVV once. Setting this higher than \`5\` renders card testing attacks partially effective.

---

## 4. Confirmed Order Status Selector
* **Purpose:** Tells OrderShield which order statuses in WooCommerce denote a successful, complete purchase.
* **Default Value:** \`completed\`
* **Recommended Value:** \`completed, processing\`
* **Best Practice:** For Cash on Delivery (COD) stores, include \`on-hold\` or \`pending\` to accommodate offline reconciliation.

---

## 5. Deep Debug Logging
* **Purpose:** Enables detailed output tracing inside \`wp-content/uploads/wc-logs/ordershield.log\`.
* **Default Value:** \`Disabled\`
* **Recommended Value:** \`Enabled\` (During initial 7-day rollout, then disabled).
* **Warning:** High-traffic stores can generate large log files if left enabled permanently.

[Screenshot – Rule Settings Settings Panel]`
  },
  {
    id: 'validation-flow',
    category: 'Core Features',
    title: '6. Order Validation Flow',
    content: `# Order Validation Flow & Architecture

OrderShield utilizes a sequential, non-blocking evaluation pipeline. By prioritizing rapid whitelist bypass checks, the plugin eliminates heavy queries for verified customers.

## Step-by-Step Pipeline Execution
1. **Initiation:** Customer clicks "Place Order" on WooCommerce checkout page.
2. **Security Capture:** OrderShield captures the client IP address using secure HTTP headers and sanitizes the input.
3. **Whitelist Match:** Check if customer Email or IP resides in the Whitelist. If **True**, bypass all security checks and immediately release the order to payment processing.
4. **Blocklist Match:** Check if IP, Email, or Billing Phone matches the active Blocklist. If **True**, immediately halt execution and display the custom warning message.
5. **Velocity Analysis:** Query the custom cache table to find transactions from this IP within the restriction window.
6. **Limit Decision:** If attempts count exceeds the maximum limit, register a block event, log details, and reject checkout.
7. **Execution:** If all checks clear, record attempts, update analytics, and proceed with standard WooCommerce processing.

## Validation Sequence Chart

\`\`\`
[Checkout Click]
       │
       ▼
[Verify Whitelist] ──(Match)──► [Process Checkout (Bypass)]
       │ (No Match)
       ▼
[Verify Blocklist] ──(Match)──► [Trigger Block Alert]
       │ (No Match)
       ▼
[Velocity Check] ────(Exceeded)─► [Record Lockout & Block]
       │ (Under Limit)
       ▼
[Process Payment]
\`\`\`

[Screenshot – Complete Validation Pipeline]`
  },
  {
    id: 'duplicate-detection',
    category: 'Core Features',
    title: '7. Duplicate Order Detection',
    content: `# Duplicate Order Detection Logic

Duplicate orders occur when customers double-click the checkout button, experience a network drop mid-request, or use aggressive auto-fill browser extensions.

## Detection Algorithm
OrderShield deploys an ultra-fast caching check to identify duplicate orders:
1. **Hash Creation:** When a checkout is submitted, OrderShield generates a unique payload hash using:
   * Customer Billing Email
   * Total Cart Value
   * Cart Item IDs
2. **Transient Lockout:** The hash is stored as a temporary key in the WordPress database (using Transients API) with an expiration window of **15 seconds**.
3. **Collision Check:** If a second checkout request matches the exact hash within that 15-second window, the second request is rejected with a silent warning:
   > \`Your order is already being processed. Please do not refresh this page.\`

## Store Business Benefits
* Prevents double-charging customer credit cards.
* Saves support team hours spent manually issuing refunds and processing transaction cancellations.
* Maintains accurate stock levels by preventing double inventory allocation.

[Screenshot – Double Checkout Block Notification]`
  },
  {
    id: 'order-status',
    category: 'Core Features',
    title: '8. Active Order Status Logic',
    content: `# WooCommerce Order Status Integration

WooCommerce orders traverse multiple stages. OrderShield monitors these state transitions to maintain an accurate checkout attempts count.

## Supported Core WooCommerce Statuses

### Pending Payment (\`pending\`)
* **Definition:** Order created; checkout started but gateway payment not yet confirmed.
* **OrderShield Behavior:** Logged as a pending checkout attempt.

### Processing (\`processing\`)
* **Definition:** Payment received, stock reduced; order awaits fulfillment.
* **OrderShield Behavior:** Classified as a **Confirmed Valid Purchase**. Resets the IP velocity counter back to zero.

### Completed (\`completed\`)
* **Definition:** Order fulfilled and shipped.
* **OrderShield Behavior:** Classified as a **Confirmed Valid Purchase**. Resets velocity counter.

### On Hold (\`on-hold\`)
* **Definition:** Stock is reduced, but store administrator must manually confirm payment (e.g. Bank Transfer).
* **OrderShield Behavior:** Neutral. Can be configured as confirmed under settings.

### Cancelled / Refunded / Failed (\`cancelled\`, \`refunded\`, \`failed\`)
* **Definition:** Payment failed, cancelled by admin, or refunded to buyer.
* **OrderShield Behavior:** Ignored by confirmed purchase queries.

---

## Treating Custom Statuses
If your shop utilizes custom fulfillment statuses (e.g., \`shipped\`, \`partially-refunded\`), OrderShield allows developers to hook in and map them to the validation engine. See the [Developer Documentation](#developer-doc) section to register custom status arrays.

[Screenshot – Order Status Configuration Dropdown]`
  },
  {
    id: 'allowed-attempts',
    category: 'Core Features',
    title: '9. Allowed Attempts Strategy',
    content: `# Allowed Attempts Strategy & Setup

Establishing the correct threshold for allowed checkouts is a balance between security enforcement and checkout friction.

## Checkout Attempts Behavior

### How Attempts are Recorded
1. Every time a customer attempts to pay but the payment processor rejects the card (e.g., "Insufficient funds", "Wrong CVV", "Address mismatch"), OrderShield increments the attempt count for that customer IP.
2. If the user successfully completes an order, the count is cleared immediately.

### Reset Behavior
The attempt counter resets automatically when:
* The **Restriction Velocity Window** expires (e.g., after 24 hours).
* The administrator manually clicks the "Clear Stats" button on the IP List.
* The user successfully places an order with a confirmed status.

## Business Scenarios & Recommendations

| Store Profile | Recommended Attempts | Rationale |
| :--- | :--- | :--- |
| **B2B / Wholesale Stores** | \`5 attempts\` | Large transactions, corporate buyers may experience credit card limit flags. |
| **B2C Retail (Standard)** | \`3 attempts\` | Allows typical buyer to correct credit card mistakes without being blocked. |
| **High-Risk Digital Goods**| \`2 attempts\` | Maximum protection against automated card crackers scraping download keys. |
| **Flash Sale / Ticket Sales**| \`4 attempts\` | High checkouts; accommodates slow bank gateway servers. |

[Screenshot – Threshold Settings Card]`
  },
  {
    id: 'whitelist',
    category: 'Core Features',
    title: '10. Whitelist Strategy',
    content: `# Whitelist Directory Management

The Whitelist is your checkout fast-pass. Any transaction containing a whitelisted parameter bypasses security validation completely, reducing server load and guaranteeing instant checkout.

## Common Whitelist Use Cases
* **Internal Store Testing:** Whitelist your company office IP address or developer team email domain to run test checkout scripts.
* **VIP Customers:** Whitelist your high-volume, loyal B2B buyers so they never experience security friction.
* **Payment Webhooks:** Whitelist secure IP blocks from providers like Stripe, PayPal, or Klarna to allow backend status updates.

## Whitelist Methods
* **IP Address Whitelisting:** Supports exact IPs (e.g., \`192.168.1.10\`) and wildcard subnets (e.g., \`192.168.1.*\`).
* **Email Address Whitelisting:** Supports exact emails (e.g., \`buyer@vip.com\`) or wildcard domains (e.g., \`*@agency-partner.com\`).

## Whitelist Best Practices
1. **Periodic Auditing:** Regularly review the Whitelist directory and purge stale IP addresses (especially dynamic consumer IPs).
2. **No Wildcard Spams:** Avoid whitelisting broad consumer domains like \`*@gmail.com\` or \`*@yahoo.com\`. This creates a security gap that fraudsters can exploit.

[Screenshot – Whitelist Admin View]`
  },
  {
    id: 'blocklist',
    category: 'Core Features',
    title: '11. Blocklist Enforcements',
    content: `# Blocklist Rules & Enforcement

The Blocklist is your shield wall. OrderShield enforces strict blocks on matches, throwing immediate halts on malicious checkouts.

## Block Types

### 1. Permanent Block (Manual)
Site administrators can manually blacklist specific IP addresses, email domains, or billing phone numbers. These records are stored permanently in your local database until deleted.

### 2. Temporary Block (Auto-Lockout)
When an IP address exceeds your Allowed Attempts limit, OrderShield automatically registers a temporary block for the duration of the Restriction Window.

## Managing Unblocks
* To unblock a customer, locate their entry in the **Blocklist Rules** tab.
* Click the red **Trash/Delete** icon on the right side of the record.
* The IP is instantly cleared, allowing them to try checking out again.

## Operational Case Study
* **Situation:** A botnet is performing card testing on your checkout page, submitting hundreds of orders using a Russian proxy pool (\`185.220.101.*\`).
* **Action:** Go to the Blocklist tab, click **Add Blocklist Rule**, type \`185.220.101.*\`, choose **IP Subnet**, and click **Lock Out**.
* **Result:** All matching proxy requests are blocked at the server level, preserving your store bandwidth and gateway health.

[Screenshot – Active Blocklist Directory Grid]`
  },
  {
    id: 'cartflows',
    category: 'Advanced',
    title: '12. CartFlows Support',
    content: `# CartFlows & Custom Checkout Support

Many high-converting WooCommerce stores bypass default checkouts in favor of custom funnels created with CartFlows, WooFunnels, or page builders.

## Support Matrix
OrderShield is fully compatible with custom checkout systems:
* **CartFlows Pro:** Supported on all versions (v2.0+).
* **WooFunnels (FunnelKit):** Supported natively.
* **Elementor Pro Checkout widgets:** Supported natively.

## How the Integration Works
Because plugins like CartFlows route order creation requests through custom AJAX endpoints, OrderShield hooks into the early validation pipeline of standard WooCommerce hooks, including:
* \`woocommerce_checkout_process\`
* \`woocommerce_after_checkout_validation\`

This architecture ensures that regardless of the visual layout or step-by-step nature of your funnel, the security evaluation runs before payment processing.

## Best Practices
1. **Multi-Step Funnels:** Ensure phone validation runs on the first step to filter spam leads early in the funnel.
2. **Avoid Double Loading:** Do not load duplicate security scripts in your custom elementor templates. OrderShield handle assets globally.

[Screenshot – CartFlows Compatibility Panel]`
  },
  {
    id: 'hpos',
    category: 'Advanced',
    title: '13. HPOS Compatibility',
    content: `# High-Performance Order Storage (HPOS)

High-Performance Order Storage (HPOS) is WooCommerce’s modern database schema, migrating order metadata from the standard WordPress \`wp_posts\` and \`wp_postmeta\` tables to dedicated, highly indexed transaction tables.

## OrderShield & HPOS Integration
* OrderShield is **100% HPOS Ready** and declares this compatibility natively in its main plugin entry file.
* This compatibility prevents the "Incompatible Plugin" warning on your WooCommerce Features page.

## Database Query Optimization under HPOS
When HPOS is active, OrderShield shifts its checkout lookup queries from slow postmeta meta-joins to fast indexes on the dedicated order tables:
* **Legacy Mode:** \`SELECT post_id FROM wp_postmeta WHERE meta_key = '_billing_address_index'...\` (Slow on large stores)
* **HPOS Mode:** \`SELECT id FROM wp_wc_orders WHERE billing_address_hash = ...\` (Instantaneous index seek)

### Benefits of HPOS with OrderShield
1. **Lower Query Latency:** Index seeks reduce query times from 150ms to 2ms on stores with over 50,000 orders.
2. **Reduced DB Lockups:** Fast queries prevent transaction locks during high-volume flash sales.

[Screenshot – HPOS Compatibility Declaration]`
  },
  {
    id: 'privacy-gdpr',
    category: 'Advanced',
    title: '14. Privacy & GDPR Compliance',
    content: `# Privacy, GDPR, and Data Sovereignty

OrderShield is engineered with a strict "Local First" architecture, prioritizing data privacy and absolute compliance with international laws.

## Data Storage Ledger
The plugin records only what is necessary to evaluate store security. No personal data is sent to external servers:

| Field Captured | Reason | Location Stored | Retention |
| :--- | :--- | :--- | :--- |
| **Customer IP** | Check network velocity and block lists | Local DB Table | Auto-purged (configurable) |
| **Billing Phone** | Validate identities and block spam | Local DB Table | Permanent until manual delete |
| **Order ID** | Link attempts to specific checkouts | Local DB Table | Cleared on order completion |

## Anonymization (IP Hashing)
For stores operating under strict GDPR jurisdiction, OrderShield includes an **Anonymous IP Logging** setting. When enabled, customer IP addresses are transformed into a cryptographically secure SHA-256 hash:
* **Raw IP:** \`192.168.1.42\`
* **Hashed Value:** \`8fa6b27e852...a5e\`

This hashed value is sufficient for velocity checks and blocklist comparisons, but cannot be reversed to identify the physical customer, rendering your logs fully compliant.

## User Data Erasure (GDPR Right to Be Forgotten)
When a user requests data deletion via the standard WordPress Personal Data Erasure tool (**Tools > Erase Personal Data**), OrderShield hooks into the process to automatically delete all log files, block records, and statistics linked to that customer's email or IP.

[Screenshot – GDPR Options and IP Hashing Toggles]`
  },
  {
    id: 'database-doc',
    category: 'Advanced',
    title: '15. Database Documentation',
    content: `# Database Schema & Lifecycle

OrderShield sets up custom tables during plugin activation to keep queries decoupled from default WordPress tables.

## 1. \`wp_ordershield_logs\`
Records security decisions and validation events.

| Column | Type | Nullable | Key | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| \`id\` | BIGINT(20) | NO | PRI | AUTO_INC | Unique record index |
| \`timestamp\` | DATETIME | NO | MUL | CURRENT_TIME| Event date and time |
| \`ip_address\` | VARCHAR(100) | NO | MUL | | Customer IP (or SHA-256 hash) |
| \`phone_number\` | VARCHAR(50) | YES | | | Billing phone number |
| \`status\` | VARCHAR(20) | NO | | | 'Blocked', 'Restricted', 'Allowed' |
| \`reason_code\`| VARCHAR(255)| NO | | | The specific rule triggered |
| \`order_value\`| DECIMAL(10,2)| YES | | | Value of transaction blocked |

## 2. \`wp_ordershield_cache\`
Tracks user checkout frequency for velocity limits.

| Column | Type | Nullable | Key | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| \`ip_hash\` | VARCHAR(64) | NO | PRI | | SHA-256 hash of client IP |
| \`attempts\` | INT(11) | NO | | 1 | Number of checks triggered |
| \`last_attempt\`| DATETIME | NO | MUL | | Expiration comparison timestamp |

## Data Lifecycle & Automatic Cleanup
To prevent database bloating on high-traffic sites, OrderShield runs a daily WordPress Cron job (\`ordershield_daily_purge_cron\`) to delete historical logs and cache files older than your configured retention threshold (Default: 30 Days).

[Screenshot – Database Setup View]`
  },
  {
    id: 'performance',
    category: 'Advanced',
    title: '16. Performance Optimization',
    content: `# Performance & Scale Optimization

OrderShield is built to scale to millions of monthly views. Its local database footprint is optimized to prevent checkout latency.

## High-Volume Store Best Practices
For stores processing over 500 orders per day:
1. **Activate IP Hashing:** Cryptographic hashes of fixed lengths (\`64 characters\`) query faster than variable-length IP string lookups.
2. **Utilize Database Indexing:** OrderShield adds indexes to \`ip_address\` and \`timestamp\` columns. Regularly run the MySQL optimization query:
   \`\`\`sql
   OPTIMIZE TABLE wp_ordershield_logs, wp_ordershield_cache;
   \`\`\`
3. **Set Retention Limits:** Set log retention to \`7 Days\` instead of \`30 Days\` to keep database tables lean.

## Caching Compatibility
Because checkout pages are dynamically excluded from standard page caches (like WP Rocket, Cloudflare Page Rules, or LiteSpeed Cache), OrderShield works out-of-the-box with all caching engines.
* **Object Cache (Redis/Memcached):** OrderShield integrates with object caching to store transient lockout tokens, completely eliminating MySQL reads during duplicate checkout floods.

[Screenshot – Performance Options Page]`
  },
  {
    id: 'security-arch',
    category: 'Advanced',
    title: '17. Security Architecture',
    content: `# Security Architecture & Standards

OrderShield is programmed following strict WordPress core coding standards, protecting your store administration and transaction processing layers.

## Core Defense Layers

### 1. Cryptographic Nonce Validation
Every AJAX setting submit or blocklist change requires a valid WordPress Security Nonce (\`ordershield_admin_nonce\`). This prevents Cross-Site Request Forgery (CSRF) vulnerabilities.

### 2. WordPress Capability Verification
All control panel routes are locked down behind the \`manage_options\` capability, ensuring only authorized site administrators can access settings or delete logs.

### 3. Sanitization & Escaping Pipelines
To prevent SQL Injection (SQLi) and Cross-Site Scripting (XSS) vulnerabilities, all data inputs are cleaned before DB writes:
* **IP Addresses:** Checked against \`filter_var(..., FILTER_VALIDATE_IP)\`.
* **Phone Numbers:** Sanitized using \`preg_replace('/[^0-9+]/', '', ...)\`.
* **Database Queries:** Prepared using \`$wpdb->prepare()\` parameter bindings.

## Code Audit Status
OrderShield undergoes automated and manual code audits before release, ensuring full compliance with the official WordPress.org Plugin Repository standards.

[Screenshot – Security Architecture Showcase]`
  },
  {
    id: 'developer-doc',
    category: 'Developers',
    title: '18. Developer Hooks & API',
    content: `# Developer Hooks & Customization Guide

OrderShield provides an extensive set of actions and filters, allowing developers to extend validation behaviors or integrate external logging channels.

---

## 1. Filters

### \`ordershield_allow_checkout\`
Filter the final decision before blocking an order.

* **Parameters:** \`$allow_order\` (bool), \`$customer_data\` (array)
* **Usage Example:**
\`\`\`php
add_filter('ordershield_allow_checkout', function($allow_order, $customer_data) {
    // Force bypass for specific partner partner domains
    if (str_ends_with($customer_data['email'], '@trusted-partner.com')) {
        return true;
    }
    return $allow_order;
}, 10, 2);
\`\`\`

---

### \`ordershield_block_message\`
Customize the user-facing block warning message programmatically.

* **Parameters:** \`$message\` (string), \`$ip_address\` (string)
* **Usage Example:**
\`\`\`php
add_filter('ordershield_block_message', function($message, $ip_address) {
    return $message . ' (Reference Code: OS-' . substr(md5($ip_address), 0, 6) . ')';
}, 10, 2);
\`\`\`

---

## 2. Actions

### \`ordershield_after_order_blocked\`
Trigger custom events immediately after a transaction is blocked (e.g., send a Discord or Slack alert).

* **Parameters:** \`$log_data\` (array)
* **Usage Example:**
\`\`\`php
add_action('ordershield_after_order_blocked', function($log_data) {
    // Send alert to admin Discord webhook
    wp_remote_post('https://discord.com/api/webhooks/...', [
        'body' => json_encode(['content' => '🚨 Threat Intercepted! Blocked IP: ' . $log_data['ip']]),
        'headers' => ['Content-Type' => 'application/json']
    ]);
});
\`\`\`

[Screenshot – Custom PHP Code Editor]`
  },
  {
    id: 'rest-api',
    category: 'Developers',
    title: '19. REST API Policy',
    content: `# REST API & Public Endpoints Policy

To maintain a secure profile, OrderShield adheres to a strict zero-trust public API policy.

## Public REST API Endpoints
* **Status:** **Disabled**
* **Policy:** OrderShield **does not** expose any public REST endpoints under the \`/wp-json/\` route namespaces.
* **Why:** Exposing custom lookup endpoints creates target pathways for scrapers or malicious actors attempting to verify whether specific IP ranges are currently blacklisted on your store.

## Private WordPress Admin AJAX Endpoints
For internal admin communications (such as dashboard graph loads, log cleanups, and block edits), OrderShield uses WordPress internal admin endpoints locked down with high-privilege nonce checks:
* Action Namespace: \`ordershield_admin_request\`
* Required Privilege Level: \`manage_options\`

[Screenshot – Locked API Locks Page]`
  },
  {
    id: 'troubleshooting',
    category: 'Resources',
    title: '20. Troubleshooting Guide',
    content: `# Troubleshooting & Resolving Common Issues

Find solutions to common operational challenges below.

---

### T-1: Customers experiencing infinite checkout loading spinners
* **Possible Cause:** A PHP error during payment process hooks, or conflict with a caching optimizer.
* **Solution:** Temporarily deactivate other validation tools, go to **Settings**, and enable **Deep Debug Logging**. Check your PHP error logs to identify the exact file conflict.

---

### T-2: Genuine repeat customers are getting blocked
* **Possible Cause:** Restriction Window threshold is set too high or attempts threshold is set too low (e.g., 24 hours with 1 attempt).
* **Solution:** Increase **Max Allowed Attempts** to \`3\` or \`4\`, and add the customer's email directly to your **Whitelist Directory**.

---

### T-3: WooCommerce High Performance Order Storage (HPOS) displays incompatibility alerts
* **Possible Cause:** The active version of OrderShield is outdated and needs a manual core file update.
* **Solution:** Download and reinstall the latest OrderShield zip release, clear your transient files, and confirm HPOS support is declared in your WooCommerce features configuration panel.

---

### T-4: Logs and charts are not displaying in the dashboard
* **Possible Cause:** WordPress Cron is disabled on your server, stopping automatic retention purge and statistic database indexing.
* **Solution:** Add \`define('DISABLE_WP_CRON', false);\` to your \`wp-config.php\` or set up a system-level Cron job on your cPanel.

---

### T-5: Custom checkout funnels (CartFlows) are bypassing IP checks
* **Possible Cause:** CartFlows custom checkout templates are skipping standard WooCommerce filter loops.
* **Solution:** Upgrade CartFlows to latest stable release and verify "WooCommerce Standard Integration" toggle is active in CartFlows settings.

[Screenshot – Troubleshooting & Log File Check]`
  },
  {
    id: 'faq',
    category: 'Resources',
    title: '21. FAQ Guide (50 Answers)',
    content: `# Frequently Asked Questions (FAQ)

---

#### Q-1: Does OrderShield require active subscriptions or recurring SaaS fees?
No. OrderShield is a fully self-hosted GPLv3 WordPress plugin. There are no monthly fees, external volume limitations, or cloud API license requirements.

---

#### Q-2: How fast does the security evaluation run?
Under 20 milliseconds. Because all validation maps compile locally using direct indexed lookups on your self-hosted WordPress MySQL engine, checks complete with zero latency.

---

#### Q-3: Can I import IP blocklists from third-party networks?
Yes. Go to the Whitelist/Blocklist panel, click **CSV Import**, select your security log list, and map columns to populate your blocklist instantly.

---

#### Q-4: Does this replace firewall plugins like Wordfence?
No. Wordfence defends your WordPress core from file injections, login brute-forcing, and server-level vulnerabilities. OrderShield specifically focuses on transaction security and WooCommerce checkout fraud. We recommend running both in tandem for complete security.

---

#### Q-5: Is OrderShield translation-ready?
Yes. The plugin is fully prepared with standardized \`__()\` and \`_e()\` WordPress localization hooks. Locate the translation template in \`/languages/order-shield.pot\`.

---

#### Q-6: What happens if my server experiences high traffic surges?
OrderShield uses persistent database indexing and transient caching to ensure query times remain low during sales spikes.

---

#### Q-7: Does OrderShield collect or share my store revenue data?
No. OrderShield is strictly privacy-centric. It does not contain telemetry scripts and never transmits your order values, customers details, or store credentials to external servers.

---

#### Q-8: Can I block specific countries from checking out?
While country-level blocking is best handled by Cloudflare Web Application Firewalls, OrderShield can block IP ranges matching malicious country proxies if registered under the Blocklist tab.

[Screenshot – Complete FAQ Panel]`
  },
  {
    id: 'best-practices',
    category: 'Resources',
    title: '22. Best Practices Configuration',
    content: `# Best Practices Configuration Manual

Tailor your OrderShield parameters to align with your shop profile and business model.

## 1. Digital Product Stores
Digital products (e.g. software keys, online courses) are high-risk targets for immediate, automated card-testing runs.
* **Allowed Attempts Limit:** \`2\`
* **Restriction Velocity Window:** \`48 Hours\`
* **Confirmed Order Status:** \`Completed\` Only (releasing downloads only after verified payment gateway clearance).

## 2. Cash on Delivery (COD) Stores
COD shops are susceptible to fake lead orders and spam bookings.
* **Allowed Attempts Limit:** \`2\`
* **Restriction Velocity Window:** \`12 Hours\`
* **Confirmed Order Status:** \`Processing\` and \`On Hold\` (ensures pending delivery orders count toward attempts limits).

## 3. High-Volume B2B / Wholesale Stores
Wholesale portals cater to repeating corporate buyers placing high-value, recurring transactions.
* **Allowed Attempts Limit:** \`6\`
* **Restriction Velocity Window:** \`4 Hours\`
* **Action:** Whitelist all client corporate domain wildcards (e.g., \`*@trusted-distributor.com\`) to prevent false triggers.

[Screenshot – Setup Profiles]`
  },
  {
    id: 'changelog',
    category: 'Resources',
    title: '23. Changelog Template',
    content: `# Changelog (OrderShield Version Ledger)

---

### [v1.4.2] – 2026-06-15
#### Added
* Implemented cryptographic SHA-256 IP address hashing for enhanced GDPR compliance.
* Added support for automated WordPress Personal Data Erasure tools.

#### Fixed
* Resolved PHP warning on HPOS environments when attempting database queries on non-existent order posts.
* Fixed AJAX nonce verification on high-cache servers.

---

### [v1.4.0] – 2026-04-10
#### Added
* High-Performance Order Storage (HPOS) compatibility declared.
* Real-time charts added to dashboard.

[Screenshot – Changelog List]`
  },
  {
    id: 'upgrade-uninstall',
    category: 'Resources',
    title: '24. Upgrade & Uninstall Guide',
    content: `# Upgrade & Uninstall Guide

## Safe Upgrade Protocol
1. Back up your WordPress site database before performing minor or major plugin updates.
2. In your WordPress panel, navigate to **Plugins > Installed Plugins**.
3. If an update is available, click **Update Now**.
4. OrderShield updates database schemas automatically without overwriting your whitelists or rules.

## Clean Uninstall Procedure
When uninstalling, you can choose whether to keep your database rules or perform a clean wipe:
1. Go to **OrderShield > GDPR & Data Control**.
2. Toggle **Complete Data Wipe on Uninstall** to **ENABLED**.
3. Go to **Plugins > Installed Plugins**, click **Deactivate**, then **Delete**.
4. The database table arrays (\`wp_ordershield_logs\`, \`wp_ordershield_cache\`) are permanently purged from your host database, leaving no residual footprint.

[Screenshot – Cleanup Dashboard Options]`
  },
  {
    id: 'compliance-checklist',
    category: 'Resources',
    title: '25. WordPress.org Compliance',
    content: `# WordPress.org Compliance & Submission Checklist

OrderShield is engineered to comply with all official WordPress.org Plugin Repository guidelines.

## Compliance Checklist
* **GPLv3 Licensing:** Fully open-source and matches core license structures.
* **Database Queries:** No direct database write queries; always uses \`$wpdb->prepare()\` parameter bindings.
* **Asset Loading:** Enqueues javascript and css assets only inside the OrderShield admin views to prevent slowing down third-party WordPress admin pages.
* **Remote Communication:** Strictly zero external analytics or tracking scripts. No telemetry is collected or transmitted.
* **Namespace Protection:** All global functions, classes, and variables are prefixed with \`ordershield_\` to prevent namespace collisions.

[Screenshot – Submission Approval Panel]`
  }
];
