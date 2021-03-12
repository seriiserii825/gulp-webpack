<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'my_custom_init' );
function my_custom_init() {
	$applicazioni = 'Applicazioni';
	register_post_type( 'applicazioni', array(
		'labels'             => array(
			'name'              => $applicazioni, // Основное название типа записи
			'singular_name'     => $applicazioni, // отдельное название записи типа Book
			'add_new'           => __( 'Add new' ),
			'add_new_item'      => __( 'Add new' ),
			'edit_item'         => __( 'Edit new' ),
			'new_item'          => __( 'New item' ),
			'view_item'         => __( 'View' ),
			'search_items'      => __( 'Search' ),
			'parent_item_colon' => '',
			'menu_name'         => $applicazioni
		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'          => get_template_directory_uri() . '/assets/i/static/applications.png',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'revisions' )
	) );
	register_post_type( 'prodotti', array(
		'labels'             => array(
			'name'              => 'Prodotti', // Основное название типа записи
			'singular_name'     => 'Prodotti', // отдельное название записи типа Book
			'add_new'           => __( 'Add new' ),
			'add_new_item'      => __( 'Add new' ),
			'edit_item'         => __( 'Edit new' ),
			'new_item'          => __( 'New item' ),
			'view_item'         => __( 'View' ),
			'search_items'      => __( 'Search' ),
			'parent_item_colon' => '',
			'menu_name'         => 'Prodotti'
		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'          => get_template_directory_uri() . '/assets/i/static/product.png',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'revisions' )
	) );
	register_post_type( 'referenze', array(
		'labels'             => array(
			'name'              => 'Referenze', // Основное название типа записи
			'singular_name'     => 'Referenze', // отдельное название записи типа Book
			'add_new'           => __( 'Add new' ),
			'add_new_item'      => __( 'Add new' ),
			'edit_item'         => __( 'Edit new' ),
			'new_item'          => __( 'New item' ),
			'view_item'         => __( 'View' ),
			'search_items'      => __( 'Search' ),
			'parent_item_colon' => '',
			'menu_name'         => 'Referenze'
		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'          => get_template_directory_uri() . '/assets/i/static/research.png',
		'supports'           => array( 'title', 'thumbnail', 'revisions' )
	) );
	register_post_type( 'docs', array(
		'labels'             => array(
			'name'              => 'Documenti', // Основное название типа записи
			'singular_name'     => 'Documenti', // отдельное название записи типа Book
			'add_new'           => __( 'Add new' ),
			'add_new_item'      => __( 'Add new' ),
			'edit_item'         => __( 'Edit new' ),
			'new_item'          => __( 'New item' ),
			'view_item'         => __( 'View' ),
			'search_items'      => __( 'Search' ),
			'parent_item_colon' => '',
			'menu_name'         => 'Documenti'
		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'          => get_template_directory_uri() . '/assets/i/static/document.png',
		'supports'           => array( 'title', 'thumbnail', 'revisions' )
	) );
	register_post_type( 'impianti_tipo', array(
		'labels'             => array(
			'name'              => 'Impianti tipo', // Основное название типа записи
			'singular_name'     => 'Impianti tipo', // отдельное название записи типа Book
			'add_new'           => __( 'Add new' ),
			'add_new_item'      => __( 'Add new' ),
			'edit_item'         => __( 'Edit new' ),
			'new_item'          => __( 'New item' ),
			'view_item'         => __( 'View' ),
			'search_items'      => __( 'Search' ),
			'parent_item_colon' => '',
			'menu_name'         => 'Impianti tipo'
		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'          => get_template_directory_uri() . '/assets/i/static/lightbulb.png',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'revisions' )
	) );
}
