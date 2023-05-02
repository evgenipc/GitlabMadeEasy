/*
    Marks MRs with your name with red boarder so you can find them easier.
*/

$('[data-name="Evgeni Dimov"]').closest('.merge-request').css( "border", "2px solid red" );
$('[data-name="Evgeni Dimov"]').closest('.merge-request merged').css( "border", "2px solid red" );