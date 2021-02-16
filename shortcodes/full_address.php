<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
function full_address() {
	ob_start();
	?>
	<?php $full_address = get_field( 'full_address', 'option' ) ? get_field( 'full_address', 'option' ) : '<span class="red">Add full_address from Admin -> Acf settings</span>'; ?>
	<?php return $full_address; ?>
	<?php
}
add_shortcode( 'full_address', 'full_address' );
?>
