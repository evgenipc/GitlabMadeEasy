/*
    Mark file as viewed when 'V' is pressed on the keyboard.
*/

document.onkeyup = async function (e) {
    if (e.key === 'v') {
        if ( $("*:focus").is("textarea, input") ) return;

        await $(".is-active.diff-file").first().find('[data-testid="fileReviewCheckbox"]')[0].click();
    }
}
