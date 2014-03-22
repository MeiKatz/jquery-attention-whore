jQuery Attention Whore
================
Your application just got some news for you and wants your attention? Let's make her an attention whore until you pay attention to her and she shuts up.

Invite her to your party
----------------
Just include the following line after you've include the jQuery library:
```HTML
<script type="application/javascript" src="jquery.attention-whore.js"></script>
```

Make her handsome
----------------
We know already that your application is a little attention whore. Let her show how annoying she could be.
```JavaScript
// normal call
$.theAttentionWhore.attract( "I want your attention!" );

// set her level of annoyingness (how often the title will change)
// -- change title every 500 milliseconds
$.theAttentionWhore.attract( "I want your attention twice a second!", 500 );

// make her shut up if she gets to annoying
$.theAttentionWhore.shutup();
```
You don't have to bother if she changes her news - you won't lose your actual title.
