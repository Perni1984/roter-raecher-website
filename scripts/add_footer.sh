#!/usr/bin/env bash
set -euo pipefail

##############################################################################
# Usage:
#   ./add_footer.sh [folder] "Left Text" "Center Text" ["Right Text Prefix"]
#
# Notes:
#   - Default for "Right Text Prefix" is "Seite", producing e.g.:
#       "Seite 1 von 10"
#   - This script will prepend "output-" to the original .jpg file name.
#   - Make sure the Ubuntu font is installed on your system (e.g. `sudo apt-get install fonts-ubuntu`).
#   - All variable expansions are in double quotes to properly escape user input.
##############################################################################

##############################################################################
# 1. Read arguments
##############################################################################
# If the first argument is a directory, cd into it, then shift $1 away so
# the other parameters line up as $1=left_text, $2=center_text, $3=right_text_prefix.
if [ $# -ge 1 ] && [ -d "$1" ]; then
  cd "$1" || exit
  shift 1
fi

# After that, we expect:
#   $1 -> Left Text (required)
#   $2 -> Center Text (required)
#   $3 -> Right Text Prefix (optional, defaults to "Seite")

left_text="${1:-}"
center_text="${2:-}"
right_text_prefix="${3:-}"

# Basic argument checks
if [ -z "$left_text" ] || [ -z "$center_text" ]; then
  echo "Usage:"
  echo "  $0 [folder] \"Left Text\" \"Center Text\" [\"Right Text Prefix\"]"
  echo "Example (default right prefix = 'Seite'):"
  echo "  $0 \"Ausgabe 1\" \"Ilias Pernsteiner\""
  exit 1
fi

# If no right_text_prefix is specified, default to "Seite"
if [ -z "$right_text_prefix" ]; then
  right_text_prefix="Seite"
fi

##############################################################################
# 2. Count JPG files in the current folder
##############################################################################
shopt -s nullglob  # So that *.jpg expands to empty list instead of literal '*.jpg'
files=( *.jpg )
count="${#files[@]}"

if [ "$count" -eq 0 ]; then
  echo "No JPG files found in this folder."
  exit 1
fi

##############################################################################
# 3. Loop through each .jpg and add the footer
##############################################################################
i=1
for file in "${files[@]}"; do
  output="output-$file"

  # Double-quote all variable references to prevent word splitting & shell expansion
  convert "$file" \
    -gravity south \
    -background white \
    -splice 0x100 \
    -font "Ubuntu" \
    -pointsize 36 \
    -fill black \
    -gravity southwest -annotate +20+50 "$left_text" \
    -gravity south     -annotate +0+50  "$center_text" \
    -gravity southeast -annotate +20+50 "$right_text_prefix $i von $count" \
    "$file"

  (( i++ ))
done

echo "Done. Processed $count JPG file(s)."