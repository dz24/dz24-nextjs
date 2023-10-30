---
title: 'コードノート'
date: '2020-01-01'
modi: '2020-01-02'
---

### General workflow

## To delete lines containing the string 'cs', one can type in Vim's command mode:

`:g/cs/d`

## To do the same set of vim commands for the lines in the selected block, type in Vim command mode, norm, i.e.:

`:'<,'>norm g_ayo`

## Replace all occuraces of fish with duck:

`:%s/fish/duck/g`

## Increment column of numbers:

Visual block + g + \<C-a>

## Size of folders:

du -hs .

## Grep

grep -ri --include="*py" 'zobi'

## find

find . -type f -name "*.py"

## git diff --name-only

git diff --name-only SHA1 SHA2

### matplotlib

## default color cycle:

plt.rcParams['axes.prop_cycle'].by_key()['color']

### Starship for cool terminal
~/.config/starship.toml

### iterm2->settings->keys

## split

new split: win + D
move split: win + \[/\]

## Tabs

move to left tab: win + 1
new tab: win + T
move to right tab: win + 2
move tab right: ctrl + win + 2
move tab left: ctrl + win + 1

## check disc space:

ncdu

## python code check:

black *.py --diff
ruff *.py
