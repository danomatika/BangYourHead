Dan Wilcox 2008

rc-patches v0.3.0

bring on the bump using your favorite minimal object-oriented algorithmic balls

Originally begun at a STEIM residency in October 2007, these patches are inspired by Chris McCormick's awesome s-abstractions and Frank Barknecht's sssad state saving.  Most of the objects have guis with sssad state saveable parameters.

You will need pd-extended and sssad (included in .zip).

patches

Some of the objects included are:

    * rc-drumsseqs: sequencers with velocity values
    * rc-patternbuddy: pattern save and load to sequencers
    * rc-chipwave~: a chiptunes emulator built around Phill Phelp's chipwave~ example
    * rc-wavetable~: a wavetable gui osc
    * rc-sample~: oneshot sampler with reverse and speed control
    * rc-arp: the arpeggiator from Tod Winkler's Composing Interactive Music
    * rc-openclose: open and close patches (useful for playlists)
    * rc-count: yet another counter (no pd external is complete without one)
    * a bunch of utility wrappers (sfplay~, rc-spigot~, etc)
    * blahblahblah ... the list grows

update history

    * 10/19/08 v0.3.0 - added a bunch of new objects, removed pdmtl dependencies, removed dynamic gui objects (just too slow), added index help patches
    * 12/18/07 v0.2.0 - added rc-record~, fixed missing [symbol] in rc-patternbuddy, and replaced all OSCx 
						objects with mrpeach OSC objects, removing oscx as a requirement (its depreciated)
    * 11/09/07 v0.1.1 - fixed [rc-chipwave~] adsr and replaced usage of [gate 2] with a subpatch
    * 11/08/07 v0.1.0 - released initial version



