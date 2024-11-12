#!/bin/bash

# Navigate to the NoteAppFrontend directory from the NoteAppBackend folder
cd "$(dirname "$0")/../NoteAppFrontend"

# Build the frontend using npm
echo "Building the frontend..."
npm run build

# Navigate back to the NoteAppBackend directory
cd ../NoteAppBackend

FRONTEND_DIST="$(pwd)/../NoteAppFrontend/dist"
BACKEND_WWWROOT="$(pwd)/wwwroot"

# Check if the wwwroot folder exists, if not create it
if [ ! -d "$BACKEND_WWWROOT" ]; then
    echo "wwwroot folder does not exist. Creating..."
    mkdir -p "$BACKEND_WWWROOT"
fi

# Clear the wwwroot folder
echo "Clearing the wwwroot folder..."
rm -rf "$BACKEND_WWWROOT/*"

# Copy new files from dist to wwwroot
echo "Copying new files from dist to wwwroot..."
cp -r "$FRONTEND_DIST"/* "$BACKEND_WWWROOT/"

echo "Files copied successfully."
