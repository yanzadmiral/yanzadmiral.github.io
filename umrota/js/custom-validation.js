$(document).ready(function(){
	
	
	// contact forms validation
	$('#frm_contact').validate({
		
	      errorPlacement: function(error, element) {
			 return true;
			 
		  }, 
		
		  rules: {
		   txt_name: {
			minlength: 2,
			required: true,
		   },
		   txt_email: {
			required: true,
			email: true,
		   },
		   txt_phone: {
			required: true,
		   },
		  txt_message: {
			minlength: 2,
			required: true,
		   },
		  
		  },
		  
		  submitHandler: function( form ) {
			   
				$.ajax({
					url :  'email/contact-email-process.php',
					data : $('#frm_contact').serialize(),
					type: "POST",
					success : function(data){
						alert(data)
						if(data=="sent") {
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-success'>Thank you for contacting us. We will be in touch with you soon.</div>");
						} else {
						
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-danger'>We are sorry, but there appears to be a problem with the form you submitted.</div>");
						}
						
					}
				})
				return false;
			 }
		  
		 });  // end contact forms validation
		 
		 
		 // booking forms validation
	$('#frm_booking').validate({
		
	      errorPlacement: function(error, element) {
			 return true;
			 
		  }, 
		      
		  rules: {
			  
			  // personal information verification
			  
		   txt_name: {
			minlength: 2,
			required: true,
		   },
		   txt_last_name: {
			minlength: 2,
			required: true,
		   },
		   txt_email: {
			required: true,
			email: true,
		   },
		   txt_phone: {
			required: true,
		   },
		    txt_dob: {
			required: true,
		   },
		    txt_country: {
			required: true,
		   },
		    txt_address: {
			required: true,
		   },
		    chk_agree: {
			required: true,
		   },
		   
		   
		   // credit card verification
		   
		    ddl_card_type: {
			required: true,
			email: true,
		   },
		   txt_card_number: {
			required: true,
		   },
		    txt_holder_name: {
			required: true,
		   },
		    txt_cvc_number: {
			required: true,
		   },
		    ddl_expire_month: {
			required: true,
		   },
		    ddl_expire_year: {
			required: true,
		   },
		 
		  
		  },
		  
		  submitHandler: function( form ) {
			   
				$.ajax({
					url :  'email/booking-email-process.php',
					data : $('#frm_booking').serialize(),
					type: "POST",
					success : function(data){
						if(data=="sent") {
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-success'>Thank you for contacting us. We will be in touch with you soon.</div>");
						} else {
						
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-danger'>We are sorry, but there appears to be a problem with the form you submitted.</div>");
						}
						
					}
				})
				return false;
			 }
		  
		 });  
		 
		 // car booking forms validation
	$('#frm_car_booking').validate({
		
	      errorPlacement: function(error, element) {
			 return true;
			 
		  }, 
		                
		  rules: {
			  
		   txt_first_name: {
			minlength: 2,
			required: true,
		   },
		   txt_last_name: {
			minlength: 2,
			required: true,
		   },
		   txt_email: {
			required: true,
			email: true,
		   },
		   txt_phone: {
			required: true,
		   },
		    txt_country: {
			required: true,
		   },
		    txt_pick_date: {
			required: true,
		   },
		    txt_drop_date: {
			required: true,
		   },
		    txt_drop_hours: {
			required: true,
		   },
		   txt_drop_mins: {
			required: true,
		   },
		   txt_pay_method: {
			required: true,
		   },
		   
		  
		  },
		  
		  submitHandler: function( form ) {
			   
				$.ajax({
					url :  'email/car-detail-booking-email-process.php',
					data : $('#frm_car_booking').serialize(),
					type: "POST",
					success : function(data){
						if(data=="sent") {
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-success'>Thank you for contacting us. We will be in touch with you soon.</div>");
						} else {
						
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-danger'>We are sorry, but there appears to be a problem with the form you submitted.</div>");
						}
						
					}
				})
				return false;
			 }
		  
		 });  
		 
		 
		 // cruise booking forms validation
	$('#cruise_frm_booking').validate({
		
	      errorPlacement: function(error, element) {
			 return true;
			 
		  }, 
		                
		  rules: {
			  
		   txt_first_name: {
			minlength: 2,
			required: true,
		   },
		   txt_last_name: {
			minlength: 2,
			required: true,
		   },
		   txt_email: {
			required: true,
			email: true,
		   },
		   txt_phone: {
			required: true,
		   },
		    txt_country: {
			required: true,
		   },
		    txt_pick_date: {
			required: true,
		   },
		    txt_drop_date: {
			required: true,
		   },
		    txt_drop_hours: {
			required: true,
		   },
		   txt_drop_mins: {
			required: true,
		   },
		   txt_pay_method: {
			required: true,
		   },
		   
		  
		  },
		  
		  submitHandler: function( form ) {
			   
				$.ajax({
					url :  'email/cruise-detail-booking-email-process.php',
					data : $('#cruise_frm_booking').serialize(),
					type: "POST",
					success : function(data){
						if(data=="sent") {
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-success'>Thank you for contacting us. We will be in touch with you soon.</div>");
						} else {
						
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-danger'>We are sorry, but there appears to be a problem with the form you submitted.</div>");
						}
						
					}
				})
				return false;
			 }
		  
		 });  
		 
		  // tour booking forms validation
	$('#tour_frm_booking').validate({
		
	      errorPlacement: function(error, element) {
			 return true;
			 
		  }, 
		                
		  rules: {
			  
		   txt_first_name: {
			minlength: 2,
			required: true,
		   },
		   txt_last_name: {
			minlength: 2,
			required: true,
		   },
		   txt_email: {
			required: true,
			email: true,
		   },
		   txt_phone: {
			required: true,
		   },
		    txt_country: {
			required: true,
		   },
		    txt_booking_date: {
			required: true,
		   },
		    txt_adults: {
			required: true,
		   },
		    txt_children: {
			required: true,
		   },
		   txt_pay_method: {
			required: true,
		   },
		   
		  
		  },
		  
		  submitHandler: function( form ) {
			   
				$.ajax({
					url :  'email/tour-detail-booking-email-process.php',
					data : $('#tour_frm_booking').serialize(),
					type: "POST",
					success : function(data){
						if(data=="sent") {
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-success'>Thank you for contacting us. We will be in touch with you soon.</div>");
						} else {
						
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-danger'>We are sorry, but there appears to be a problem with the form you submitted.</div>");
						}
						
					}
				})
				return false;
			 }
		  
		 });  
		 
		 
		  // hotel booking forms validation
	$('#hotel_frm_booking').validate({
		
	      errorPlacement: function(error, element) {
			 return true;
			 
		  }, 
		                
		  rules: {
			  
		   txt_first_name: {
			minlength: 2,
			required: true,
		   },
		   txt_last_name: {
			minlength: 2,
			required: true,
		   },
		   txt_email: {
			required: true,
			email: true,
		   },
		   txt_phone: {
			required: true,
		   },
		    txt_country: {
			required: true,
		   },
		     txt_arriv_date: {
			required: true,
		   },
		     txt_dept_date: {
			required: true,
		   },
		     txt_rooms: {
			required: true,
		   },
		     txt_beds: {
			required: true,
		   },
		    txt_adults: {
			required: true,
		   },
		    txt_children: {
			required: true,
		   },
		   txt_pay_method: {
			required: true,
		   },
		   
		  
		  },
		  
		  submitHandler: function( form ) {
			   
				$.ajax({
					url :  'email/tour-detail-booking-email-process.php',
					data : $('#hotel_frm_booking').serialize(),
					type: "POST",
					success : function(data){
						if(data=="sent") {
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-success'>Thank you for contacting us. We will be in touch with you soon.</div>");
						} else {
						
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-danger'>We are sorry, but there appears to be a problem with the form you submitted.</div>");
						}
						
					}
				})
				return false;
			 }
		  
		 });  
		 
		   // hotel booking forms validation
	$('#flight_frm_booking').validate({
		
	      errorPlacement: function(error, element) {
			 return true;
			 
		  }, 
		                
		  rules: {
			    
		   txt_first_name: {
			minlength: 2,
			required: true,
		   },
		   txt_last_name: {
			minlength: 2,
			required: true,
		   },
		   txt_email: {
			required: true,
			email: true,
		   },
		   txt_phone: {
			required: true,
		   },
		    txt_from: {
			required: true,
		   },
		    txt_to: {
			required: true,        
		   },
		    txt_chkin_date: {
			required: true,
		   },
		    txt_chkout_date: {
			required: true,
		   },
		    txt_adults: {
			required: true,
		   },
		    txt_children: {
			required: true,
		   },
		   txt_infant: {
			required: true,
		   },
		   txt_pay_method: {
			required: true,
		   },
		   
		  
		  },
		  
		  submitHandler: function( form ) {
			   
				$.ajax({
					url :  'email/flight-detail-booking-email-process.php',
					data : $('#flight_frm_booking').serialize(),
					type: "POST",
					success : function(data){
						if(data=="sent") {
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-success'>Thank you for contacting us. We will be in touch with you soon.</div>");
						} else {
						
							$('#result_msg').html("<div class='col-md-12 text-center alert alert-danger'>We are sorry, but there appears to be a problem with the form you submitted.</div>");
						}
						
					}
				})
				return false;
			 }
		  
		 });  


	}); 