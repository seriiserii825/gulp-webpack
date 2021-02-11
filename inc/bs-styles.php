<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
function bsv_eccommerce_scripts() {
	wp_enqueue_style( 'bsv-eccommerce-style', get_stylesheet_uri());
	wp_enqueue_style( 'bsv-eccommerce-my', get_template_directory_uri().'/assets/css/my.css');

	wp_enqueue_script( 'bsv-ecommerce-custom-jquery', get_template_directory_uri() . '/assets/js/custom-jquery.js', ['jquery'], null, true );
	wp_enqueue_script( 'bsv-ecommerce-picturefill', get_template_directory_uri() . '/assets/libs/picturefill.min.js', [ 'jquery' ], null, true );
	wp_enqueue_script( 'bsv-ecommerce-webpack', get_template_directory_uri() . '/assets/js/dist/webpack.js' );
}
add_action( 'wp_enqueue_scripts', 'bsv_eccommerce_scripts' );
