<script setup></script>

<template>
	<div class="dsn-form mt-20 form-box d-flex flex-column">
		<form id="contact-form" class="form w-100" method="post" action="contact.php" data-toggle="validator">
			<div class="messages"></div>
			<div class="input__wrap controls">
				<div class="form-group dsn-up" :data-fade-up="true">
					<div class="entry-box">
						<input id="form_name" type="text" name="name" placeholder="Name" autocomplete="off"
							required="required" data-error="name is required." />
					</div>
					<div class="help-block with-errors"></div>
				</div>

				<div class="form-group dsn-up" :data-fade-up="true">
					<div class="entry-box">
						<input id="form_email" type="email" name="email" autocomplete="off"
							placeholder="Email" required="required"
							data-error="Valid email is required." />
					</div>
					<div class="help-block with-errors"></div>
				</div>

				<div class="form-group dsn-up" :data-fade-up="true">
					<div class="entry-box">
						<textarea id="form_message" class="form-control" name="message"
							placeholder="Write me a message" required="required"
							data-error="Please,leave me a message."></textarea>
					</div>
					<div class="help-block with-errors"></div>
				</div>

				<div class="d-flex justify-content-end dsn-up" :data-fade-up="true">
					<div class="image-zoom move-circle background-theme" data-dsn="parallax">
						<input type="submit" value="Send" />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
