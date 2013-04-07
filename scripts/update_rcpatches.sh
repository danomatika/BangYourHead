#! /bin/bash

WD=$(dirname $0)
DEST=../externals/rc-patches

###

cd $WD

# make dir
mkdir -p $DEST

# get latest source
git clone git://github.com/danomatika/rc-patches.git

# copy readme
cp -v rc-patches/README.md $DEST

# copy sources
cp -Rv rc-patches/extra $DEST
cp -Rv rc-patches/rc $DEST
cp -Rv rc-patches/rc-drums $DEST
cp -Rv rc-patches/rc-patches $DEST

# cleanup
rm -rf rc-patches

