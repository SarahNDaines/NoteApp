#!/bin/bash

TARGET_PATH="$(dirname "$(realpath "$0")")/bin/Release/net8.0/win-x64/publish/NoteAppBackend.exe"
SHORTCUT_PATH="$(dirname "$(realpath "$0")")/bin/NoteAppBackend.lnk"

# Create the shortcut as a symbolic link in the root of the bin directory
ln -s $TARGET_PATH $SHORTCUT_PATH
