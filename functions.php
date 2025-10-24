<?php
/**
 *
 * Edubin functions and definitions
 * @package Edubin
 *
 */

define('EDUBIN_DIR', trailingslashit(get_template_directory()));
define('EDUBIN_URI', trailingslashit(get_template_directory_uri()));
define('EDUBIN_THEME_VERSION', '8.14.5');

/**
 * Edubin only works in WordPress 4.7 or later.
 */
if (version_compare($GLOBALS['wp_version'], '4.7-alpha', '<')) {
    require get_template_directory() . '/include/back-compat.php';
    return;
}

/**
 * Load Theme Dependencies
 */
require_once get_theme_file_path('/include/theme-dependencies.php');



