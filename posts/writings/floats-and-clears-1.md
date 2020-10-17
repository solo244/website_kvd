---
slug: floats-and-clears-1
title: Floats and clears 1
header: Positioning your elements via floating. Incoming problems...
collection: css introductions
category: tutorial
filters: css
date: 13 July 2015
---

## A story

Using the float property on elements can be compared to the following story. Imaging a sunny day with the sun shining bright and giving off a heating glow that warms your face. You’re sitting on the sidewalk. And although it’s nice and cosy, it’s just too warm. And all of a sudden there’s an ice cream truck sound in the far distance. We all know what that means and whilst you run inside to get some coins lying around, you trip, fall face first on the floor with your arms reacting to late and waving around like scarves in the wind. You get up after that face plant, flabbergasted, and rush back out with the change you collected. You can still hear the promised bells of ice cream, but the truck is nowhere to be seen. Hatefully you run around, hoping to catch it again and after a minute of looking, you light up, as in the corner of your eye you see the truck drying away slowly, hoping to attract more customers. You start running over to it but have to wait to cross the street as all of a sudden, it’s filled with cars. Each going too fast for you to slip between. So you have to wait. But luckily it’s only for two minutes. But in the meantime the truck fades more and more in the distance.

> After that extra run and catching up to it, the vendor lets you know that he only has two flavours left: bad and worse.

You don’t really care for either of those, but since you ran all that way, you guess you might take one of each. Two scoops later, you hear the vendor ask for his money and realise what those two scopes are worth. Only then do you realise that you’re short on money. Saddened by this, you ask him to diminish the number of scoops by one and you take the journey back home. Waiting for the traffic again, you arrive shortly and happy as you are, you trip yet again over the same thing you tripped over the first time. Leaving your sweet sweet ice cream to land on the floor, inedible by normal standards. Sitting down and soaking about this recent loss, you realise that there’s ice cream in your freezer. You rush over there, almost tripping over yet that same spot, and treat yourself to a nice, well deserved ice cream.

Now. This story is the exact copy of what you will feel, when you start working with the float property. You’ll feel unlucky, things will go wrong and same bad stuff will happen over and over for no apparent reason. One small problem or mistake might have an influence on everything else and that might mess up all of the hard work you did. However, no matter how difficult or annoying this might be, as long as you hold in there, you’ll always find a way to fix it. Maybe not in a way you intended in the first place, but you’ll fix it. The only thing you’ll need is time and effort. Now on to the practical stuff.

## You'll need to float

I’m not going to go and define float and clear via the internet. Rather, I’ll give you my personal interpretation of them and how I use(d) them. First off, floating is something you’ll use a lot in webdesign. Why? Because a website is a huge collection of block elements that you’ll want to put next to each other. But block elements will always be on top of each other. You can find proof underneath, not that you would need it, I know you blindly believe what I’m telling you.

Now, we have two blocks underneath each other. I cleverly named the boxes: box1 and box2. You’ll also notice that I gave them similar class names. That way I can define similar properties to both of them in one go, instead of having to do it one at a time. Making an element float means letting it float as high as possible. You can specify pretty much one thing, which side it has to go to: left or right. Imagine I want to position box2 next to box1.

```html
<div id="box1" class="box"></div>
<div id="box2" class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
}

#box1 {
  background-color: red;
}

#box2 {
  background-color: yellow;
}
```

## Come to the right side

I'll change the float property of box2 to right because I want it to be positioned on the right side. What you'll see now is that box2 floats as right as it possibly can but it doesn’t move up. This is not the result we wanted. We want box2 to be next to box1, as left as possible. But to put two elements next to each other we'll have to let both elements float. So I'll add a float property to box1. Although box1 is already in the right place and I don't want to actually move it, I still have to give it the float property in order to float other elements next to it.

```css
#box1 {
  float: left;
}

#box2 {
  float: right;
}
```

## Move to the left

After letting box1 float left, I'll notice that box2 still has to be moved to the left side. It has to float as left as possible, next to box1. Luckily for us, floating elements will never be stacked on top of each other but rather next to each other. You'll also notice that we'll be using float left more often than float right. The simple reason for this is that we read from left to right and usually start by putting our elements on the left side of our page.

```css
#box1 {
  float: left;
}

#box2 {
  float: left;
}
```

## Out of the normal flow

We finally have our elements next to each other. You'll notice that adding new boxes next to box1 and box2 is simple. Just add an element with the float left property and it will automatically be positioned next to the other boxes. That all fun and games, but I haven’t talked about why making elements float is so annoying. So far everything was easy right? Well yes, but making elements float has its consequences. Imagine we would be using this on a website and wanted to add a footer underneath these two boxes. As is often the case with modern websites. Floating elements have some nasty behaviours and will actually no longer fit in the "normal flow" of the document. That means that elements added behind it will position themselves differently. I'll show this by adding a footer after box1 and box2. Notice where the footer ends up.
