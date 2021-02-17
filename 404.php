<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package bs-bertan
 */

get_header();
?>
<meta http-equiv="refresh" content="5;url=/" />
<main id="primary" class="site-main">
	<?php
	$title = 'La pagina che stavi cercando non esiste';
	$text = '<p>La pagina richiesta non è stata trovata, <br> tra pochi secondi sarai rediretto all\'home page</p>';
	?>
	<?php if (get_lang() === '_ro') : ?>
		<?php
		$title = 'Pagina pe care o căutați nu există';
		$text = '<p>Pagina solicitată nu a fost găsită, <br> în câteva secunde veți fi redirecționat către pagina principală</p>';
		?>
	<?php elseif (get_lang() === '_en') : ?>
		<?php
		$title = 'The page you were looking for does not exist';
		$text = '<p>The requested page was not foundf, <br> in a few seconds you will be redirected to the home page</p>';
		?>
	<?php endif; ?>

	<section class="error-404 not-found" style="padding-top: 30vh; padding-bottom: 30vh;">
		<header class="page-header">
			<h1 class="page-title" style="text-align:center; margin-top:10vh;">404 - <?php echo $title; ?>. <br>
				<progress value="0" max="4" id="progressBar"></progress>
			</h1>
		</header><!-- .page-header -->

		<div class="page-content" style="text-align:center">
			<?php echo $text; ?>
		</div><!-- .page-content -->

	</section><!-- .error-404 -->

</main><!-- #main -->
<script>
	var timeleft = 4;
	var downloadTimer = setInterval(function() {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
		}
		document.getElementById("progressBar").value = 4 - timeleft;
		timeleft -= 1;
	}, 1000);
</script>


<?php
get_footer();
