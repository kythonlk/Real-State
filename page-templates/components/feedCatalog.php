<div class="container">
    <div class="row">
        <?php
        $args = array(
            'post_type'      => 'real_estate', // Change to your custom post type name
            'posts_per_page' => 8, // Display 8 posts
        );

        $query = new WP_Query( $args );

        if ( $query->have_posts() ) :
            while ( $query->have_posts() ) :
                $query->the_post();
                ?>

                <div class="col-md-3">
                    <a href="<?php the_permalink(); ?>" class="card-link">
                        <div class="card mb-4">
                            <?php if ( has_post_thumbnail() ) : ?>
                                <img src="<?php the_post_thumbnail_url(); ?>" class="card-img-top" alt="<?php the_title(); ?>">
                            <?php endif; ?>
                            <div class="card-body">
                                <h5 class="card-title"><?php the_title(); ?></h5>
                                <?php
                                $number_of_baths = get_field('spesification')['number_of_baths'];
                                $number_of_bed_rooms = get_field('spesification')['number_of_bed_rooms'];
                                $sqft = get_field('spesification')['sqft'];
                                ?>
                                <p class="card-text d-flex">
                                    <sapn class="pr-2">Bath:</sapn> <?php echo esc_html($number_of_baths); ?>
                                    <sapn class="px-2">Bed:</sapn> <?php echo esc_html($number_of_bed_rooms); ?>
                                    <sapn class="px-2">Sqft:</sapn> <?php echo esc_html($sqft); ?>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            <?php
            endwhile;
            wp_reset_postdata();
        else :
            echo '<p>No real estate listings found.</p>';
        endif;
        ?>
    </div><!-- .row -->
</div><!-- .container -->
