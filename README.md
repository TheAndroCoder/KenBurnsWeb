# KenBurns Effect
### Beautiful Kenburns Effect on Images in Webpage
```
Note : This is a jQuery based library, please import jQuery before importing this library
```
<br><br>
**How To Import?**
```html
<script src="https://cdn.jsdelivr.net/gh/TheAndroCoder/KenBurnsWeb/KenBurns.js"></script>
```
**Usage :**
<br>
The usage is very simple you just need to allocate a div in your html where you need the Images to have Kenburns effect.
You need to set a height and width to this div. You can do this either inline or in an external css file.
```html
<div id="kenburns-div" style="width:500px;height:500px;"></div>
```
Then in Your Javascript you need to initialise the KenBurns View.
```javascript
//Initialise KenBurns class
let kenburns = new KenBurns('kenburns-div')
//Add as many Images as you want ! It will perform a slideshow of the images
kenburns.addImageSource('/images/image1.jpg')
kenburns.addImageSource('/images/image2.jpg')
// Zoom In Effect Time
kenburns.zoomInTime(5000)
// Zoom Out Effect Time
kenburns.zoomOutTime(5000)
// Start Effect
kenburns.startEffect()
```
And Thats All !! Enjoy Web Development !!
