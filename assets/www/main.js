var scanCode = function() {
    window.plugins.barcodeScanner.scan(
       
        	scanSuccess

    , function(error) {
        alert("Scan failed: " + error);
    });
}



var scanSuccess = function(result) {
	var textFormats = "QR_CODE DATA_MATRIX";
	var productFormats = "UPC_E UPC_A EAN_8 EAN_13 CODE_128";
	if (result.cancelled) {
		return;
	}
	if (textFormats.match(result.format)) {
		var scanVal = result.text;
		if (scanVal.indexOf("http") === 0) {
			navigator.notification.confirm('TRANSPARENCE MEDICALE\nVous souhaitez exprimer votre avis ?\n',
					function(b) {
						if (b === 1) {
							window.open(scanVal, '_blank','location=yes');
						}
					}, result.text, 'Donnez votre avis, Annulez');
		} else {
			navigator.notification.alert(result.text, function() {
			}, 'Scan Value:', 'Done');
		}
	} else if (productFormats.match(result.format)) {
		navigator.notification
				.confirm(
						'TRANSPARENCE MEDICALE\nVous souhaitez exprimer votre avis ?\n',
						function(b) {
							if (b === 1) {
								var searchUrl = "http://transparence-medicale.fr/search.html?medecine_id="
										+ result.text;
								window.open(searchUrl, '_blank','location=yes');
							}
						}, result.text, 'Donnez votre avis, Annulez');
	} else {
		alert("Scan format : " + result.format + " n'est pas supporté. Code scanné: "
				+ result.text);
	}
}



var encodeText = function() {
    window.plugins.barcodeScanner.encode(
            BarcodeScanner.Encode.TEXT_TYPE,
            "http://www.mobiledevelopersolutions.com", 
            function(success) {
                alert("Encode success: " + success);
            }, function(fail) {
                alert("Encoding failed: " + fail);
            });
}

var encodeEmail = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.EMAIL_TYPE,
        "a.name@gmail.com", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodePhone = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.PHONE_TYPE,
        "555-227-5283", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodeSMS = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.SMS_TYPE,
        "An important message for someone.", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}