<?php
/**
 * The template for displaying single real estate posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package real-estate
 */

get_header();

// Start the loop
while ( have_posts() ) :
    the_post();

    // Retrieve ACF field values
    $main_image = get_field('images');
    $description = get_field('description');
    $number_of_baths = get_field('spesification')['number_of_baths'];
    $number_of_bed_rooms = get_field('spesification')['number_of_bed_rooms'];
    $sqft = get_field('spesification')['sqft'];

    ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header">
            <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
        </header><!-- .entry-header -->

        <div class="entry-content">
            <?php if ($main_image) : ?>
                <img src="<?php echo esc_url($main_image['url']); ?>" alt="<?php echo esc_attr($main_image['alt']); ?>">
            <?php endif; ?>

            <?php the_content(); ?>

            <div class="specifications">
                <p><strong>Number of Baths:</strong> <?php echo esc_html($number_of_baths); ?></p>
                <p><strong>Number of Bedrooms:</strong> <?php echo esc_html($number_of_bed_rooms); ?></p>
                <p><strong>Square Footage:</strong> <?php echo esc_html($sqft); ?></p>
            </div>
        </div><!-- .entry-content -->

        <footer class="entry-footer">
            <?php real_estate_entry_footer(); ?>
        </footer><!-- .entry-footer -->
    </article><!-- #post-<?php the_ID(); ?> -->

<?php endwhile; // End of the loop.

get_footer();
