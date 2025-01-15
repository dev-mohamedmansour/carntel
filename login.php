<!DOCTYPE html>
<html lang="en">
<head>
	  <meta charset="UTF-8"/>
	  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	  <!-- FAVICONS ICON -->
	  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
	  <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
	  <script
		    src="https://kit.fontawesome.com/64d58efce2.js"
		    crossorigin="anonymous"
	  ></script>
	  <link rel="stylesheet" href="css/login.css"/>
	  <link rel="stylesheet" href="css/bootstrap.min.css"/>
	  <title>Login & Sign up Form</title>
</head>
<body>
<div class="container-login">
	  <div class="forms-container-login">
		    <div class="signin-signup">
				 <form action="" method="post" class="sign-in-form">
					   <h2 class="title">Login</h2>
					   <div class="input-field">
							<i class="fas fa-user"></i>
							<input type="email" name="email"
								  placeholder="Email" required/>
					   </div>
					   <div class="input-field">
							<i class="fas fa-lock"></i>
							<input type="password" name="password"
								  placeholder="Password" minlength="8"
								  maxlength="20" required/>
					   </div>
					   <button type="submit" name="login"
							 class="site-button">Login
					   </button>
								  <?php
										 if (isset($message)) {
												foreach ($message as $message) {
													  echo '
              <div class="message">
                <span>' . $message . '</span>
                <i class="fas fa-times" onclick="this.parentElement.remove();"></i>
                </div>
                    ';
												}
										 }
								  ?>
				 </form>
				 <form action="" method="post" class="sign-up-form">
					   <h2 class="title">Sign up</h2>
					   <div class="input-field">
							<i class="fas fa-user"></i>
							<input type="text" name="name"
								  placeholder="Username" required/>
					   </div>
					   <div class="input-field">
							<i class="fas fa-envelope"></i>
							<input type="email" name="email"
								  placeholder="Email" required/>
					   </div>
					   <div class="input-field">
							<i class="fas fa-lock"></i>
							<input type="password" name="password"
								  minlength="8" maxlength="20" required
								  placeholder="Password"/>
					   </div>

					   <button type="submit" name="register"
							 class="site-button">Sign in
					   </button>

				 </form>
		    </div>
	  </div>
	  <div class="panels-container-login">
		    <div class="panel left-panel">
				 <div class="content">
					   <div class="twm-maskingtext m-b50">
							<h1>Sign In</h1>
							<img src="images/text-masking-pic.jpg"
								alt="Image">
					   </div>
					   <h3>Carntel</h3>
					   <p>
							I dont have an account!
					   </p>
					   <button class="site-button" id="sign-up-btn">
							Sign Up
					   </button>
				 </div>
		    </div>
		    <div class="panel right-panel">
				 <div class="content1">
					   <div class="twm-maskingtext m-b50">
							<h1>Sign Up</h1>
							<img  src="images/text-masking-pic.jpg"
								alt="Image">
					   </div>
					   <h3>Carntel</h3>
					   <p>
							Already have an account?
					   </p>
					   <button class="site-button" id="sign-in-btn">
							Login
					   </button>
				 </div>
		    </div>
	  </div>
</div>

<script src="js/main.js"></script>
</body>
</html>
