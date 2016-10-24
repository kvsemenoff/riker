<section class="ab-slider">
    <div class="container">
    	<div class="row">
	   		<div class="col-md-3">
	   			<?php require_once('includes/sidebar.php'); ?>
	   		</div>	
			<div class="col-md-9">
				<div class="ah-sbox1">
					<div class="item">
						<img src="img/ab-slide-1.jpg" alt="">
						<div class="slidetextbox">
							<a href="#">Подробнее</a>
						</div>
					</div>
					<div class="item">
						<img src="img/ab-slide-1.jpg" alt="">
						<div class="slidetextbox">
							<a href="#">Подробнее</a>
						</div>
					</div>
					<div class="item">
						<img src="img/ab-slide-1.jpg" alt="">
						<div class="slidetextbox">
							<a href="#">Подробнее</a>
						</div>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</section>

<div class="clear"></div>


<script>
 $('.ah-sbox1').owlCarousel({
    loop: true,
    margin:0,
    items: 1,
    autoplay: false,
    smartSpeed:2000,
    autoplayTimeout:7000,
    nav: true,
    navText:['<span class="ah-arrowleft"></span>','<span class="ah-arrowright"></span>']
});
</script>
			