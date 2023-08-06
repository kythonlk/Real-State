<?php
/**
 * real-estate functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package real-estate
 */

if ( ! defined( '_S_VERSION' ) ) {
	define( '_S_VERSION', '1.0.0' );
}

// Include the custom walker class
require get_template_directory() . '/inc/nav-header.php';


function real_estate_setup() {

	add_theme_support( 'automatic-feed-links' );

	add_theme_support( 'title-tag' );

	add_theme_support( 'post-thumbnails' );

	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'real-estate' ),
			'menu-2' => esc_html__('main-menu', 'Main menu'),
		)
	);

	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'real_estate_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'real_estate_setup' );

/**
 *
 * @global int $content_width
 */
function real_estate_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'real_estate_content_width', 640 );
}
add_action( 'after_setup_theme', 'real_estate_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function real_estate_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'real-estate' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'real-estate' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'real_estate_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function real_estate_scripts() {
	wp_enqueue_style( 'real-estate-style', get_stylesheet_uri(), array(), _S_VERSION );

	wp_enqueue_script( 'real-estate-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

}
add_action( 'wp_enqueue_scripts', 'real_estate_scripts' );


function enqueue_bootstrap_cdn() {
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', array(), '5.3.0', 'all');

    wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_bootstrap_cdn');


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}


/**
 * banner funtionallity adding to customizer
 */


 function your_custom_theme_customize_register($wp_customize)
	{
		$wp_customize->add_section('banner_section', array(
			'title' => __('Banner Section', 'your-custom-theme'),
			'priority' => 30,
		));
	
		// Banner Title
		$wp_customize->add_setting('banner_title', array(
			'default' => __('Welcome to our website', 'your-custom-theme'),
			'transport' => 'refresh',
		));
	
		$wp_customize->add_control('banner_title', array(
			'label' => __('Title', 'your-custom-theme'),
			'section' => 'banner_section',
			'type' => 'text',
		));
	
		// Banner Text
		$wp_customize->add_setting('banner_text', array(
			'default' => __('This is a sample banner text.', 'your-custom-theme'),
			'transport' => 'refresh',
		));
	
		$wp_customize->add_control('banner_text', array(
			'label' => __('Text', 'your-custom-theme'),
			'section' => 'banner_section',
			'type' => 'textarea',
		));
	
		// Banner Button Text
		$wp_customize->add_setting('banner_button_text', array(
			'default' => __('Learn More', 'your-custom-theme'),
			'transport' => 'refresh',
		));
	
		$wp_customize->add_control('banner_button_text', array(
			'label' => __('Button Text', 'your-custom-theme'),
			'section' => 'banner_section',
			'type' => 'text',
		));
	
		// Banner Button URL
		$wp_customize->add_setting('banner_button_url', array(
			'default' => '#',
			'transport' => 'refresh',
		));
	
		$wp_customize->add_control('banner_button_url', array(
			'label' => __('Button URL', 'your-custom-theme'),
			'section' => 'banner_section',
			'type' => 'url',
		));

		$wp_customize->add_setting('banner_background_image', array(
			'default' => get_template_directory_uri() . '/images/default-image.png',
			'transport' => 'refresh',
		));
	
		$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'banner_background_image', array(
			'label' => __('Background Image', 'your-custom-theme'),
			'section' => 'banner_section',
			'settings' => 'banner_background_image',
		)));
	}
 
 add_action('customize_register', 'your_custom_theme_customize_register');
 


//  Add custom fields to admin Register Custom Post Type

// Custom Post Type Registration
function custom_post_type_real_estate() {
    $labels = array(
        'name'                  => 'Real Estate Properties',
        'singular_name'         => 'Real Estate Property',
        'add_new'               => 'Add New',
        'add_new_item'          => 'Add New Property',
        'edit_item'             => 'Edit Property',
        'new_item'              => 'New Property',
        'view_item'             => 'View Property',
        'search_items'          => 'Search Properties',
        'not_found'             => 'No properties found',
        'not_found_in_trash'    => 'No properties found in trash',
        'parent_item_colon'     => 'Parent Property:',
        'menu_name'             => 'Real Estate',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'query_var'           => true,
        'rewrite'             => array( 'slug' => 'real-estate' ),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_position'       => 5,
        'supports'            => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
        'taxonomies'          => array( 'category', 'post_tag' ), // Add any additional taxonomies you want to use
    );

    register_post_type( 'real_estate', $args );
}
add_action( 'init', 'custom_post_type_real_estate' );

// Permalink Structure Rewrite
function custom_post_type_permalink( $post_link, $post ) {
    if ( 'real_estate' === $post->post_type && 'publish' === $post->post_status ) {
        $post_link = str_replace( '%postname%', $post->post_name, $post_link );
    }
    return $post_link;
}
add_filter( 'post_type_link', 'custom_post_type_permalink', 10, 2 );