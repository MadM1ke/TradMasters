<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$email = $_POST['email']; // Берём данные из input c атрибутом name="mail"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$telegram = $_POST['telegram']; // Берём данные из input c атрибутом name="telegram"

$token = "7210710270:AAHTGQUmO2Ot6ROoiV601W3owZZahOME_h0"; // Тут пишем токен
$chat_id = "-4244755287"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "test-mk.webtm.ru"; //Указываем название сайта

$arr = array(

  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Почта' => $email,
  'Телефон: ' => $phone,
  'Телеграм: ' => $telegram
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>