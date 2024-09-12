# Data encryption and decryption of encrypted data

## What good does this do me?

You may not want to write the words & numbers that you use on the web page that contain personal data or have a special value. You may not want other users to understand this. This exactly meets this need.

## How do I use it?

First, you need to put the raw data into a variable and then choose a keyword (a kind of code) that you want and combine the raw data with this code and send it to the function called advancedEncrypt.

	* * var encryptedMessage = advancedEncrypt("real data", "your private code"); 	* *

Then, the encrypted data, that is, the encryptedMessage variable in the example above, should be called with the same private code value and you should access the original, unencrypted form of the data.

	* * var decryptedMessage = advancedDecrypt(encryptedMessage, key); 	* *

## Why do I enter a special code?

To increase security. For example, when ABCD raw data is encrypted with the special code 1, a different value is obtained, when it is encrypted with the special code A, a different value is obtained, when it is encrypted with the special code #, a different value is obtained.

## Will encrypted data always contain regular characters?

Yes, they will all be characters in the Latin alphabet and suitable for your keyboard.
