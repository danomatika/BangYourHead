#! /bin/bash

WD=$(dirname $0)
DEST=../externals/rjlib

###

cd $WD

# make dir
mkdir -p $DEST

# get latest source
git clone git://github.com/rjdj/rjlib.git

# remove rj-specifics
rm rjlib/rj/r_#*

# copy readme
cp -v rjlib/README.txt $DEST

# copy sources
cp -Rv rjlib/rj $DEST
cp -Rv rjlib/pd $DEST

# cleanup
rm -rf rjlib

