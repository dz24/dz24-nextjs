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
