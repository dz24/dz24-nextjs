---
title: 'JP character reading log'
date: '2020-01-01'
modi: '2023-05-18'
---

A heatmap showing how many japanese characters I've read during a day. This will hopefully motivate me to read more consistently.

[![jplog](/images/jplog.png)](/images/jplog.png)

A dummy code snippet for the generation of the above heatmap:

```python
import calplot
import pandas as pd
import matplotlib.pyplot as plt
import datetime

start_date, days = (2023,1,1), 360
day0 = datetime.datetime(*start_date).date()
all_days = pd.date_range(day0, periods=days, freq='D')
events = pd.Series(values, index=all_days)
calplot.calplot(events, edgecolor=None, cmap='YlGn', daylabels=[])
plt.show()

```
with *values* being the second column of the following text file:
```
2023-05-13	9230
2023-05-14	10139
2023-05-15	4716
2023-05-16	7410
2023-05-17	5789
2023-05-18	8952
```
