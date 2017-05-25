<?php


//$emailCliente = $_POST['email'];
//return "Hello World";

// mail ("seuemail@seudominio.com.br", "Assunto da Mensagem", "Conteúdo do
// e-mail", "From: email@seudominio.com.br");


// If you are using Composer (recommended)
// require 'vendor/autoload.php';
include(dirname(__DIR__) . '/amenic/vendor/sendgrid/php-http-client/lib/Client.php');
$email = $_POST['email'];
// If you are not using Composer
// require("path/to/sendgrid-php/sendgrid-php.php");

$request_body = json_decode('{
  "personalizations": [
    {
      "to": [
        {
          "email": "$email"
        }
      ],
      "subject": "Sending with SendGrid is Fun"
    }
  ],
  "from": {
    "email": "amenicetis@gmail.com"
  },
  "content": [
    {
      "type": "text/plain",
      "value": "and easy to do anywhere, even with PHP"
    }
  ]
}');
$apiKey = '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';
// $apiKey = getenv('SENDGRID_API_KEY');
// $sg = new \SendGrid($apiKey);

$headers = ['Authorization: Bearer ' . $apiKey];
$client = new Client('https://api.sendgrid.com', $headers, '/v3');

$response = $client->mail()->send()->post($request_body);
// echo $response->statusCode();
// echo $response->body();
// print_r($response->headers());
echo json_encode($response->statusCode());




?>