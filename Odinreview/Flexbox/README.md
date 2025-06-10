Flexbox review

https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox

Flexbox is a way to arrange items into rows or columns. These items will flex (i.e. grow or shrink) based on rules that you define.

Flexbox crash course
https://www.youtube.com/watch?v=3YW65K6LcIA

Margin (with 4 values):

margin-top
margin-right
margin-bottom
margin-left

Margin (wih 3 values):

margin-top
margin-right, margin-left
margin-bottom

Margin (with 2 values):

margin-top, margin-bottom
margin-right, margin-left

Margin (with 1 value):

all four margins

The flex shorthand

flex-grow
flex-shrink
flex-basis

flex: 1 == flex: 1 1 0 == flex-grow: 1, flex-shrink: 1, flex-basis: 0

flex-grow - used as the flex item's growth factor (1 is every item grows at the same factor. 2 is one of the items will grow 2x the size of the others)

flex-shrink - similar to flex-grown but sets the shrink factor. 1 shrinks items evenly. If you don't want an item to shrink, use 0. (flex-shrink only ends up being applied if the size of all the items is larger than their parent container)

flex-basis - sets the initial size of a flex item. Using auto as flex-basis tells the item to check for a width declaration.

flex: auto == flex: 1 1 auto == flex-grow: 1, flex-shrink: 1, flex-basis: auto
