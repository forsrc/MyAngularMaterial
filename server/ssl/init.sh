
openssl genrsa -out privatekey.pem 1024

openssl req -new -key privatekey.pem -out certrequest.csr -subj /C=CN/O="forsrc"/OU="forsrc"/CN="nodejs-sh"/ST="forsrc"/L="forsrc"

openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem