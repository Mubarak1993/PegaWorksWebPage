  $(document).ready(function() {
    $('#personal_detail').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
             first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
			
		     date_of_birth: {
                validators: {
                     numberLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your Date of Birth'
                    }
                }
            },
			
			/*  gender1: {
                validators:
                    notEmpty: {
                        message: 'Please select your Gender'
                    }
                }
            },
 */
			
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'India',
                        message: 'Please supply a vaild phone number'
                    }
                }
            },
            country: {
                validators: {
                     stringLength: {
                        min: 5,
                    },
                    notEmpty: {
                        message: 'Please supply your country name'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            country_code: {
				
                validators: {
                    notEmpty: {
                        message: 'Please supply your country code code'
                    } ,
                    zipCode: {
						
                        max: 6,
                        country: 'INDIA',
                        message: 'Please supply a vaild country code'
                    }
                } 
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
            .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow")  // Do something ...
                $('#personal_detail').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});