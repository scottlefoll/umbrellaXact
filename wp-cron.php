<?php

// The URL to send the GET request to
$url = 'https://umbrellaxact-contacts.onrender.com/';

// Subtract 5 hours from the current server time
$localTime = strtotime("-5 hours");

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

// Execute cURL session and get the response
$response = curl_exec($ch);

// Check for errors and capture the error message if any
if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
}

// Close cURL session
curl_close($ch);

// Check if an error occurred
if (isset($error_msg)) {
    // Log the error
    // Format the local time and create the log entry
    $logEntry = date('Y-m-d H:i:s', $localTime) . " EST - Error accessing URL: " . $error_msg . "\n";
    // Append the error message to the log file
    file_put_contents('/home/u716979257/domains/umbrellaxact.com/public_html/cron_log.txt', $logEntry, FILE_APPEND);
    // Echo the error message
    echo "Error: " . $error_msg . "\n";
} else {
    // Log the response
    // Format the local time and create the log entry
    $logEntry = date('Y-m-d H:i:s', $localTime) . " EST - Accessed URL. Response: " . $response . "\n";
    // Append the log entry to the log file
    file_put_contents('/home/u716979257/domains/umbrellaxact.com/public_html/cron_log.txt', $logEntry, FILE_APPEND);
    // Echo the response
    echo "Response: " . $response . "\n";
}

?>
