<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
function vat() {
	ob_start();
	?>
	<?php $vat = get_field( 'vat', 'option' ) ? get_field( 'vat', 'option' ) : '<span class="red">Add vat from Admin -> Acf settings</span>'; ?>
	<?php return $vat; ?>
	<?php
}
add_shortcode( 'vat', 'vat' );
?>
