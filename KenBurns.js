class KenBurns{constructor(tagname){this.tagname=tagname;this.imageSrc=[];this.interval=0;this.zoomIn=3000;this.zoomOut=5000;$('#'+tagname).css('overflow','hidden');this.index=0}zoomOutTime(interval){this.zoomOut=interval}zoomInTime(interval){this.zoomIn=interval}addImageSource(src){this.imageSrc.push(src)}startEffect(){if(this.index==this.imageSrc.length){this.index=0}$('#'+this.tagname).html('<img>');$('img').attr('src',this.imageSrc[this.index++]);$('img').css('width','100%');$('img').css('height','100%');$('img').animate({width:"120%",height:"120%",opacity:1},500);$('img').animate({width:$('#'+this.tagname).width(),height:$('#'+this.tagname).height(),marginLeft:"0px",marginRight:"0px",marginTop:"0px",marginBottom:"0px"},this.zoomOut,'swing');$('img').animate({marginLeft:"-25%",marginTop:"-10%",width:"130%",height:"130%"},this.zoomIn,'swing');$('img').animate({width:"120%",height:"120%",opacity:0},500);var interval=setTimeout(()=>{this.startEffect();console.log('Started effect');},this.zoomIn+this.zoomOut+1000)}}
