#! /bin/bash

WD=$(dirname $0)

###

cd $WD

# remove existing
rm -rf ../externals/rj

# get latest source
git clone git://github.com/rjdj/rjlib.git

# remove rj-specifics
rm rjlib/rj/r_#*

# copy sources
cp -Rv rjlib/rj ../externals

# add input/output patches
cp -Rv rjlib/pd/*.pd ../externals/rj

# cleanup
rm -rf rjlib

