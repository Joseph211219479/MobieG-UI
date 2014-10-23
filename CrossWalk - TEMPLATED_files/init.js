skel.init({
	reset: 'full',
	breakpoints: {
		global: { range: '*', href: '/assets/css/style.css', containers: 1200 },
		wide: { range: '-1680', href: '/assets/css/style-wide.css', containers: 1000 },
		normal: { range: '-1366', href: '/assets/css/style-normal.css', containers: '95%' },
		narrow: { range: '-1080', href: '/assets/css/style-narrow.css', containers: '100%' },
		narrower: { range: '-768', href: '/assets/css/style-narrower.css' },
		mobile: { range: '-728', href: '/assets/css/style-mobile.css', grid: { collapse: true, gutters: 20 } },
		mobilep: { range: '-480', href: '/assets/css/style-mobilep.css' }
	}
}, {
	layers: {
		transformTest: function() { return skel.vars.isTouch; },
		layers: {
			titleBar: {
				breakpoints: 'narrow',
				position: 'top-left',
				side: 'top',
				width: '100%',
				height: 60,
				html: '<div class="bar"><div class="toggle" data-action="toggleLayer" data-args="leftPanel"></div><div class="logo">Templated</div></div>'
			},
			leftPanel: {
				breakpoints: 'narrow',
				position: 'top-left',
				side: 'left',
				orientation: 'vertical',
				hidden: true,
				animation: 'overlayX',
				clickToClose: true,
				width: { mobile: 280, global: '21em' },
				height: '100%',
				html: '<div data-action="moveElement" data-args="header"></div><div data-action="moveElement" data-args="footer"></div><div class="toggle" data-action="toggleLayer" data-args="leftPanel"></div>'
			}
		}
	}	
});

$(function() {

	$.fn.disableSelection = function() { return $(this).css('user-select', 'none').css('-khtml-user-select', 'none').css('-moz-user-select', 'none').css('-o-user-select', 'none').css('-webkit-user-select', 'none'); }
	
	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$sidebar = $header.add($footer),
		$main = $('#main'),
		$items = $('.item');

	if ($body.hasClass('is-demo')) {
		
		var $main = $('#demo-main'),
			$iframe = $('#demo-iframe'),
			$download = $('.button.download.free'),
			mobile = (skel.vars.deviceType == 'ios' || skel.vars.deviceType == 'android' || skel.vars.deviceType == 'wp');

		// Mobile adjustments.		
			if (mobile) {
			
				$iframe
					.css('height', 'auto')
					.css('position', 'relative');
					
				$main
					.css('top', 0)
					.css('position', 'relative');
			
			}
		
		// Window.
			$window
				.resize(function() {
					$main.css('height', $window.height() - 110);
				})
				.trigger('resize');

		// Modal.
			var $modal = $(
					'<div id="demo-modal">' +
						'<section>' + 
							'<h2>Downloading</h2>' + 
							'<p>Like what we\'re doing here? Show your support!</p>' +
							'<ul class="actions vertical">' +
								'<li><ul class="social"><li class="facebook"><div class="fb-like" data-href="http://templated.co" data-send="false" data-layout="button_count" data-width="100" data-show-faces="true"></div></li><li class="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://templated.co" data-text="TEMPLATED = awesome CSS, HTML5, and responsive site template freebies." data-count="horizontal">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></li><li class="google-plus"><div class="g-plusone" data-size="medium" data-href="http://templated.co"></div></li></ul></li>' +
								'<li><a href="http://twitter.com/templatedco" class="button offsite">Follow @templatedco</a></li>' +
							'</ul>' +
							'<div class="closer">&nbsp;</div>' +
						'</section>' +
					'</div>'
				),
				$modal_inner = $modal.find('section'),
				$modal_closer = $modal.find('.closer'),
				$modal_timeoutId,
				$modal_locked;
		
			$modal
				.hide()
				.appendTo($body)
				.disableSelection()
				.on('click', function() {
					$modal._close();
					return true;
				});

			$modal_inner
				.on('click', function(e) {
					e.stopPropagation();
				});

			$modal
				.on('click', function(e) {
					$modal._close();
					return false;
				});
				
			$modal_closer
				.on('click', function(e) {
					$modal._close();
					return false;
				});
				
			$modal._open = function(url) {
				window.clearTimeout($modal_timeoutId);
				$modal_locked = true;
				$modal
					.fadeTo('fast', 1.0, function() {
						if (typeof FB !== 'undefined'
						&&	typeof FB.XFBML !== 'undefined')
							FB.XFBML.parse();
						$modal_locked = false;
						$modal_timeoutId = window.setTimeout(function() {
							window.location.href = url;
						}, 1500);
					});
			};
			
			$modal._close = function() {
				if (!$modal.is(':visible'))
					return false;

				window.clearTimeout($modal_timeoutId);
				$modal_locked = true;
				$modal
					.fadeTo('fast', 0, function() {
						$modal.hide();
						$modal_locked = false;
					});
			};
			
			$download
				.on('click', function(e) {
					
					if (!mobile) {

						$modal._open($(this).attr('href'));
						return false;

					}

				});

			$window
				.on('keydown', function(e) {
			
					if (e.keyCode == 27)
						$modal._close();
				
				});
		
	}
	else {

		// Items.
			$items
				.css('cursor', 'pointer')
				.on('click', function(e) {
					window.location.href = $(this).find('a').first().attr('href');
					return false;
				});
		
		// Sidebar.
			$window.load(function() {
				var sh, wh, st;

				if ($window.scrollTop() == 1)
					$window.scrollTop(0);

				$window
					.on('scroll', function() {
						if (skel.isActive('narrow')
						||	skel.vars.isTouch) {
							$sidebar
								.data('fixed', 0)
								.css('position', 'absolute')
								.css('top', 0);

							return;
						}
						
						var x, y;
						
						x = Math.max(sh - wh, 0);
						y = Math.max(0, $window.scrollTop() - x);

						if ($sidebar.data('fixed') == 1) {
							if (y <= 0)
								$sidebar
									.data('fixed', 0)
									.css('position', 'absolute')
									.css('top', 0);
						}
						else {
							if (y > 0)
								$sidebar
									.data('fixed', 1)
									.css('position', 'fixed')
									.css('top', -1 * x);
						}
					})
					.on('resize', function() {

						sh = $footer.outerHeight();
						wh = $window.height();
						$main.css('min-height', sh + 10);
						$window.trigger('scroll');

					})
					.trigger('resize');
			});

	}

	// Offsite.
		$('a.offsite').attr('target', '_blank');

	// Share.
		(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));
		(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();
	
});