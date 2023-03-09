<?php
/**
 * Plugin Name: amateur tv
 * Description: Create your own amateur cam affiliate site, thanks to amateur.tv. Online cams feed and live cams viewer ready to use.
 * Requires at least: 6.0
 * Tested up to: 6.2
 * Requires PHP: 7.2
 * Tested PHP: 8.1
 * Version: 1.2.0
 * Author: amateur.cash
 * License: GPL 2.0
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: amateur-tv
 *
 * @package amateur-tv
 */

define( 'AMATEURTV_VERSION', '1.2.0');
define( 'AMATEURTV_URL', plugin_dir_url( __FILE__ ) );
define( 'AMATEURTV_DIR', dirname( plugin_basename( __FILE__ ) ) );

include_once __DIR__ . '/includes/admin.php';
include_once __DIR__ . '/includes/camlist.php';
include_once __DIR__ . '/includes/iframe.php';
