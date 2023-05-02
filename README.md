# GitlabMadeEasy
Browser extension that makes reviewing Gitlab MRs easier.

# How to enable
Go to about:debugging#/runtime/this-firefox 

Click Load Temporary Add-On... and choose manifest.json

# Setup
Go to firefox > js > gitlabListOfMrHelper.js and change "Evgeni Dimov" to your name that shows in the list of MRs.

# Features
- Adds shortcut for marking files as viewed. 
MR code reviews can be done now with keyboard shortcuts: 
'[' - previous file
']' - next file
'V' - mark current file as viewed (or not viewed)

- Adds red border to your MRs so you can easily see them while skimming the MRs list. 
