<footer class="main-footer">
    <div class="container">
        <div class="main-footer__wrap">
            <div class="address">
	            <?php $footer = get_field('main_footer', 'option');?>
	            <?php $address_title = $footer['address_title'] ? $footer['address_title'] : '<h3>Add address_title from Admin -> Acf Settings -> Footer</h3>';?>
                <?php if(is_page('contatti')): ?>
                    <h1 class="main-footer__title"><?php echo $address_title; ?></h1>
                <?php else: ?>
                    <h2 class="main-footer__title"><?php echo $address_title; ?></h2>
                <?php endif; ?>
                <ul>
                    <li>
						<?php $short_company_name = get_field( 'short_company_name', 'option' ); ?>
						<?php if ( $short_company_name ): ?>
							<?php echo $short_company_name; ?>
						<?php else: ?>
                            <h3>Add short company name from Admin -> Acf Settings</h3>
						<?php endif; ?>
                    </li>
                    <li>
						<?php $full_address = get_field( 'full_address', 'option' ); ?>
						<?php if ( $full_address ): ?>
							<?php echo $full_address; ?>
						<?php else: ?>
                            <h3>Add full_address from Admin -> Acf Settings</h3>
						<?php endif; ?>
                    </li>
                    <li>
	                    <?php $phone_number = get_field('phone_number', 'option');?>
                        <?php if($phone_number): ?>
	                        <?php $phone_clear = clear_phone($phone_number);?>
                            Telefono: <a href="tel:<?php echo $phone_clear;?>"><?php echo $phone_number; ?></a>
                        <?php else: ?>
                            <h3>Add phone_number from Admin -> Acf Settings</h3>
                        <?php endif; ?>
                    </li>
                    <li>
	                    <?php $email = get_field('email', 'option'); ?>
                        <?php if($email): ?>
                            Email: <a href="mailto:<?php echo $email;?>"><?php echo $email; ?></a>
                        <?php else: ?>
                            <h3>Add email from Admin -> Acf Settings</h3>
                        <?php endif; ?>
                    </li>
                </ul>
	            <?php $opening_times = get_field('opening_times', 'option');?>
                <?php if($opening_times): ?>
	                <?php echo $opening_times;?>
                <?php else: ?>
                    <h3>Add opening_times from Admin -> Acf Settings</h3>
                <?php endif; ?>
                <div class="copyright">
	                <?php
                    $full_company_name = get_field('full_company_name', 'option') ? get_field( 'full_company_name', 'option' ) : '<h3>Add full_company_name from Admin -> Acf Settings</h3>';
	                $vat = get_field( 'vat', 'option' ) ? get_field( 'vat', 'option' ) : '<h3>Add vat from Admin -> Acf Settings</h3>';
	                ?>
                    Copyright 2020 <?php echo $full_company_name;?> Partita Iva : <?php echo $vat;?>. Tutti i diritti riservati.
                    <a target="_blank" href="/privacy-policy/">Privacy and Cookie policy</a>.
                </div>
                <div class="partner">
	                <?php
                    $short_company_name = get_field('short_company_name', 'option') ? get_field( 'short_company_name', 'option' ) : '<h3>Add short company name from Admin -> Acf Settings</h3>';
	                $client_by = get_field( 'client_by', 'option' );
	                $parnter_logo = get_field('parnter_logo', 'option') ? get_field( 'parnter_logo', 'option' ) : '';
	                $partner_url = get_field( 'partner_url', 'option' ) ? get_field( 'partner_url', 'option' ) : '';
	                ?>
                    <div class="partner__text">
	                    <?php echo $short_company_name;?> ha scelto <?php echo $client_by;?>
                    </div>
                    <?php if(!$parnter_logo): ?>
                        <h3>Add partner logo and url from Admin -> Acf Settings</h3>
                    <?php endif; ?>
                    <a target="_blank" href="<?php echo $partner_url;?>">
                        <img src="<?php echo $parnter_logo;?>" alt="">
                    </a>
                </div>
            </div>
            <div class="form">
	            <?php $form_title = $footer['form_title'] ? $footer['form_title'] : '<h3>Add form_title from Admin -> Acf Settings -> Footer</h3>'; ?>
	            <?php $map_iframe = $footer['map_iframe'] ? $footer['map_iframe'] : '<h3>Add map_iframe from Admin -> Acf Settings -> Footer</h3>'; ?>
                <?php $form_shortcode = $footer['form_shortcode']; ?>
                <h2 class="form__title"><?php echo $form_title;?></h2>
                <?php if($form_shortcode): ?>
	                <?php echo do_shortcode($form_shortcode); ?>
                <?php else: ?>
                    <h3>Add form_shortcode from Admin -> Acf Settings -> Footer</h3>
                <?php endif; ?>
            </div>
            <div class="map">
<!--	            --><?php //echo $map_iframe;?>
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
