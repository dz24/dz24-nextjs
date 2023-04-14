---
title: 'Vim notes'
date: '2020-01-01'
modi: '2020-01-02'
---

###General workflow

## To delete lines containing the string 'cs', one can type in Vim's command mode:

`:g/cs/d`

## To do the same set of vim commands for the lines in the selected block, type in Vim command mode, norm, i.e.:

`:'<,'>norm g_ayo`

## Replace all occuraces of fish with duck:

`:%s/fish/duck/g`

## increment column of numbers:

Visual block + g + <C-a>


