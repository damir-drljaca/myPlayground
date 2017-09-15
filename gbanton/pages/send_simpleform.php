<?
if (($_POST[sender_name] == "") || ($_POST[sender_email] == "") || ($_POST[message] == "") {
    header("Location: simple_form.php");
    exit;
}

$msg = "Email sent from wwwsite\n";
$msg .= "Sender's Name:\t $_POST[senders_name]\n";
$msg .= "Sender's E-mail:\t $_POST[senders_email]\n";
$msg .= "Sender's Message:\t $_POST[message]\n";
$to = "damir.drljaca@gmail.com";
$subject = "Website feedback message";
$mailheaders = "From: My web site <www.gerogebanton.com>\n";
$mailherders .= "Reply to: $_POST[sender_email]\n";
$mail($to, $subject, $msg, $mailheaders);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Simple Feedback Form Sent</title>
</head>

<body>

<h1>The following email has been sent</h1>

<p>Your Name:<br />
<? echo "$_POST[sender_name]"; ?>
<p>Your Email Adress:<br />
<? echo "$_POST[sender_email]"; ?>
<p>Message:<br />
<? echo "$_POST[message]"; ?>
</p>
</body>
</html>

