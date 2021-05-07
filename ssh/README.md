### ssh

* Protocol to transfer data securely(encrypted) over shell* 
* Allows you to remotely control a Linux computer or server from another device
* Protocol: Standard agreement of communication between 2 devices

### How ssh works?

* Symmetrical Encryption
  * Encryption: Jumbling up data to hide the original data
  * One secret key for Encryption and Decryption
  * Drawback with above approach: If someone else has the key, they can decrypt the message
  * Key Exchange Algorithm: Secure way to exchange keys
    * With public data, secret key is calculated
* Asymmetrical Encryption
  * 2 separate keys(Public and Private) for Encryption and Decryption
  * Message encrypted by Public key can only be decrypted by the corresponding Private key
  * A gets B's public key and B gets A's public key
  * A sends message by encrypting with B's public key and vice-versa
* Diffie-hellman key exchange algorithm uses a bit of both Public and Private keys to generate the Secret key for Encyption and Decryption
  * Simplified Explanation: (https://www.youtube.com/watch?v=NmM9HA2MQGI)
  * A's secret key with Generator(AG)
  * B's secret key with Generator(BG)
  * AG sent to B getting Secret key(AGB)
  * BG sent to A getting Secret key(AGB)
  * Now they have the same Secret key(Symmetric key)
* Thereby this generated Secret key is the same on both sides, so it is Symmetric Encryption
* This is what ssh uses

### Hashing

* One way mechanism to generate some random gibberish using a Hash function
* Between client and Host, there can be an Attacker who convinces the client that he is the Host
* So Hashing is required in this case to authenticate the messages(Hash based Message Authentication Code)HMAC
* Using Hash function, each message transmitted must contain MAC(Message Authentication Code) which is a Hash generated from the Symmetric key, packet sequence number and the Message contents
* After the client sends this, the Host can check if the message hasn't been tampered with the Symmetrick key, packet sequence number and the Message contents by running through the same Hash function

### Passwords or SSH

1. Diffie-Hellman Key Exchange
2. Arrive at Symmetric Key
3. Make sure of no funny business
4. Authenticate User

* Password is sent after SSH Connection is made(Both my computer and the server has the Symmetric key), it's Encrypted and safe to send
* But by bots which Bruteforce different passwords, we can Hack this
* So ssh is safer

* If there are multiple private keys in .ssh folder
```sh
ssh-add ~/.ssh/id_rsa_digitalocean
```