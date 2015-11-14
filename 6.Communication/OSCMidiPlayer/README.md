This is a simple midi file player which can be controlled over Open Sound Control. You can select and play midi files and enable disable individual midi channels from 1-8.

Run `OSCMidiPlayer.pd` and control it with the `testOSC.pd` example patch. You should be able to control it with anything that can send OSC messages, including [TouchOSC](http://hexler.net/software/touchosc).

This example requires the `mrpeach` external library.

Note: You will need to hook Pd's MIDI out to a MIDI synthesizer in order for the player to "do anything". MIDI itself is just a digital protocol for sending note data around. Pd supports sending and receiving MIDI messages but by itself does not contain a built in synthesizer. It's up to you to either build your own in a patch or send the MIDI to an external synthesizer.

On Windows, you should be able to connect to the built in system GM (General MIDI) Synthesizer. On OSX, it's suggested to use [Simple Synth](http://notahat.com/simplesynth/). On Linux, use [Timidity](http://timidity.sourceforge.net/). See the [Pure Data FAQ on MIDI](http://puredata.info/docs/faq/midiinput) for more info.

