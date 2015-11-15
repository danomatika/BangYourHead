<p align="center">
<img src="https://raw.github.com/danomatika/BangYourHead/master/pd_headbang.png"/><br>
<strong>An Introduction to Pure Data</strong>
</p>

2012-2013 [Dan Wilcox](http://danomatika.com)

**ZIP DOWNLOAD: <http://docs.danomatika.com/BangYourHead.zip>**

With various contributions from around the web, notably:

* [rjlib](https://github.com/rjdj/rjlib): great external library
* [Roman Haefeli](http://romanhaefeli.net): Pd basics patch
* [Noisybox.net](http://noisybox.net/computers/pd): rockin' bang your head~ logo

What is Pure Data?
------------------

<p align="center">
<img src="https://raw.github.com/danomatika/BangYourHead/master/pd_patch.png"/>
</p>

Pure Data is an open source graphical patching environment for audio and multimedia similar to [Max/MSP](http://cycling74.com/products/max). It was created by [Miller Puckette](http://crca.ucsd.edu/~msp) (who also created Max) in 1996 and is now a community project with contributors from around the world.

It's website is <http://puredata.info> and you can download it from <http://puredata.info/downloads>

Conceptually, "patching" refers to programming by connecting little boxes together with "patch cords". Boxes may have inlets and outlets and perform some sort of action on incoming data with the result sent out of an outlet or number of outlets. Data is sent between boxes through the connected patch cords from outlets to inlets.

There are a few versions of Pure Data ("Pd" for short) floating around, so it's good to know the distinctions between them:

* [Pd-vanilla](http://crca.ucsd.edu/~msp/software.html): the core version by Miller Puckette
* [Pd-extended](http://puredata.info/downloads): the community version with additional libraries and functionality (this is the one most people use)
* [libpd](https://github.com/libpd/libpd): the Pd-vanilla DSP core in an embeddable C library (so developers can run Pd patches *inside* their own apps)

What do I use it for?
---------------------

### A few projects using Pd-Extended

* [**Voices & Piano** by Peter Ablinger & IEM](http://www.youtube.com/watch?v=muCPjK4nGY4)
* [**Egregore** by Cyrille Henry & Nicolas Montgermont](https://vimeo.com/24932723)
* [**Music for Flesh II** by Marco Donnarumma](http://vimeo.com/36580607)
* [**Black Vox** by Chikashi Miyama](https://vimeo.com/36557405)
* [**Beatjazz** by Onyx Ashanti](http://www.youtube.com/watch?v=-0v7mTvJ8M4)
* [**robotcowboy & other projects** by Dan Wilcox](https://vimeo.com/9243889)

### A few projects using libpd

* [**Wind** by Damian Stewart](https://vimeo.com/38784510)
* [**RjDj** app](http://www.youtube.com/watch?v=Q5Oa61KIBvs)
* [**NodeBeat** app](http://www.youtube.com/watch?v=e9Ohbb7Zxlg)

Where do I start?
-----------------

Well, you can clone or download a zip of this repository and start looking into the example patches, but I'd recommend you "Read the Manual" first: [Pure Data Start Here](http://puredata.info/docs/StartHere)

There are also a few books online, see [Pure Data Books About Pd](http://puredata.info/docs/BooksAboutPd)

If you run into specific issues or have general questions, see the [Pure Data FAQ](http://puredata.info/docs/faq)

### Other Useful Links

* Johannes Kreidler's [Programming Electronic Music in Pd](http://www.pd-tutorial.com)
* [Ed Kelly's PD Workshop Wiki](http://puredata.wikispaces.com)

Downloading this Repo as a Zip File fom GitHub
----------------------------------------------

*If you want a zip file, don't download it from GitHub. (See below.) Grab the official release here: <https://github.com/danomatika/BangYourHead.git>*

You download this repo as a zip using the "Download ZIP" button, however, currently Github does not include git submodules within the zip file, so you will also need to download the following patch libraries and extract their contents into the `externals` folder:

* [rjlib](https://github.com/rjdj/rjlib)
* [rc-patches](https://github.com/danomatika/rc-patches)

IE: downloading and extracting "rjlib" as a zip gives you a "rjlib-master" folder. Copy the contents of "rjlin-master" inside the "externals/rjlib" folder. 

Cloning this Repo with Git
--------------------------
If you're cloning this repo, make sure to checkout the rc-patches & rjlib external submodules:  
	  
	git submodule init
	git submodule update

