<?php

	videoToBase64('movie.mp4');

	function fnEncrypt($sValue,$encodeMethod, $sSecretKey, $iv)
	{
		return openssl_encrypt($sValue, $encodeMethod, $sSecretKey, NULL, $iv);
	}

	function fnDecrypt($encrypted,$encodeMethod, $sSecretKey, $iv) {
		return openssl_decrypt($encrypted, $encodeMethod, $sSecretKey, NULL, $iv);
	}
    
    function base64ToEncryptVideo($base64_string, $output_file) {
        $file = fopen($output_file, "wb");
    
        $data = explode(',', $base64_string);
    
        fwrite($file, $base64_string);
        fclose($file);
    
        return $output_file;
    }

    function videoToBase64($inputPath) {
        $type = pathinfo($inputPath, PATHINFO_EXTENSION);
        $data = file_get_contents($inputPath);
        // echo $data;
		$base64 = base64_encode($data);
		
		$method = "AES-256-CBC";
		$SecretKey = "FbcCY2yCFBwVCUE9R+6kJ4fAL4BJxxjd";
		$iv = "e16ce913a20dadb8";
		
		
		echo 'Original : '.$base64.'<br>';

		$encryptedData = fnEncrypt($base64, $method, $SecretKey, $iv);
		echo 'Encrypted : '.$encryptedData.'<br>';

		$decryptData = fnDecrypt($encryptedData, $method, $SecretKey, $iv);
		echo 'Decrypted : '.$decryptData.'<br>';

        base64ToEncryptVideo($encryptedData, 'movie.mp4.enc');
    }

?>