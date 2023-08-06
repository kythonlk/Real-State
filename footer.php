<?php
/**
 *Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package real-estate
 */

?>

<footer id="colophon" class="site-footer bg-light py-3">
    <div class="container">
        <div class="site-info text-center">
            <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'real-estate' ) ); ?>">
                <?php
                /* translators: %s: CMS name, i.e. WordPress. */
                printf( esc_html__( 'Proudly powered by %s', 'real-estate' ), 'WordPress' );
                ?>
            </a>
            <span class="sep"> | </span>
            <?php
            /* translators: 1: Theme name, 2: Theme author. */
            printf( esc_html__( 'Theme: %1$s by %2$s.', 'real-estate' ), 'real-estate', '<a href="http://kythonlk.com">kythonlk</a>' );
            ?>
        </div><!-- .site-info -->
    </div><!-- .container -->
</footer><!-- #colophon -->
</div><!-- #page -->


<?php wp_footer(); ?>

</body>
</html>
