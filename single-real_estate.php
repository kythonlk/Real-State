<?php get_header(); ?>

<section class="single-real-estate">
    <div class="container">
        <div class="row">
            <div class="col-md-8 p-4">
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <header class="entry-header">
                            <h1 class="entry-title"><?php the_title(); ?></h1>
                        </header>

                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>

                        <footer class="entry-footer">
                            <?php the_terms( get_the_ID(), 'category', '<div class="entry-terms">Categories: ', ', ', '</div>' ); ?>
                            <?php the_terms( get_the_ID(), 'post_tag', '<div class="entry-terms">Tags: ', ', ', '</div>' ); ?>
                        </footer>
                    </article>
                <?php endwhile; endif; ?>
            </div>

            <div class="col-md-4 p-4">
                <p>custom side bar</p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
