// This module is set up to be dependency-less so that Narwhal
// will be able to run it right away.

// TODO "prequire" is a hack and should be replaced when
// require.when/require.async become available for real.
require.prequire.when("bespin/boot2", function() {
    var r = require;
    var boot2 = r("bespin/boot2");
});

