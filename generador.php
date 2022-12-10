<?php
function generatePass($chars, $length) {
    $clave = "";
    while (!(strlen($clave) === $length)) {
        $array = explode(" ", $chars);
        shuffle($array);
        $clave .= $array[0];
    }
    return $clave;
}
// Importante que sean separados por espacios
$chars = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 - & @";
echo generatePass($chars, 40);
?>
