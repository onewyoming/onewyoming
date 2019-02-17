<?php
declare(strict_types=1);

require_once 'vendor/autoload.php';
$dsn = 'mysql:host=mysql;dbname=hello_world_test;
$db = new PDO($dsn, 'root', 'mysql');
