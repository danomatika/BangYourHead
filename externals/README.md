Externals
=========

An "external" is a third party library which adds new objects to Pd in order to provide some new or greater functionality.

Some externals come in the form of compiled code and others simply as patch files. In this case, the externals included in this folder are all patch files.

**Definitely** look into the patches in these folders as you'll see some great examples of abstraction design and approaches to solving all sorts of problems.

Included externals:

* [rjlib](https://github.com/rjdj/rjlib): the RjDj library; Pd-Vanilla/libpd compatible, so *ultra*-portable
* [rc-patches](https://github.com/danomatika/rc-patches): the robotcowboy library; developed for the [robotcowboy project](http://robotcowoby.com)

How to Add External Paths
-------------------------

In order to use these libraries in your patches, Pd will need to be able to find them. You can either add these folders/subfolders to Pd's search path using the `Preferences` menu or use the [declare] object and a relative path to the external fodler.

For example, let's say I want to use the patches in `externals/rjlib/rj` in a patch. I can either:

### Add a global search path to Pd

Goto `Preferences` and hit the `New...` button to add a search path. In this case, I add:

    /Users/dano/BangYourHead/externals/rjlib/rj

Now, whenever I start Pd, it knows to look for patches in this folder, so if I try to create an rj patch, say \[s_osc\], it can find `s_osc.pd` in that folder.

**Problems**: One problem with this method is that when you go to share a patch that uses an external library you added manually, whoever tries to run that patch on a different machine may run into problems where their copy of Pd can't find those objects. Make sure you include instructions on which external libraries your patch requires in order to run it.

### Add a relative search path to a patch

Another method to add search paths is to use the \[declare\] object which allows you to specify search paths for each patch instance.

In our example, if I'm added a new example to `3.Audio` and I want to use the rj external, I could tell Pd to look in `externals/rjlib/rj` for that example patch by using [declare] like so:

    [declare -path ../externals/rjlib/rj]

The "../" path of the path means to go up one directory level, relative to the calling patch, which is `3.Audio` in this case.

The nice thing about this method is that if you develop everything in one folder (such as BangYourHead), other people using your patches only need to get that entire folder to have both your patches and their dependencies. The downside is that it may lead to redundancy when people already have a copy of an external library, but in general it's not too big of a deal.

**Problems**: When using relative paths, if you move the patch to another location, the relative path may be wrong and Pd will not be able to find the external patches. Keep this in mind when moving things.


