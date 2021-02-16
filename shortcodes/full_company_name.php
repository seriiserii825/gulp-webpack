<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
function full_company_name() {
	ob_start();
	?>
	<?php $full_company_name = get_field( 'full_company_name', 'option' ) ? get_field( 'full_company_name', 'option' ) : '<span class="red">Add full_company_name from Admin -> Acf settings</span>'; ?>
	<?php return $full_company_name; ?>
	<?php
}
add_shortcode( 'full_company_name', 'full_company_name' );
?>
