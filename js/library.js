

var WEBAPP = function(){
    this.isTouch = 'ontouchstart' in window;
    this.isdevice = !!(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/));
    this.setUpRequestAnimationFrame()
    this.animationarray = [];

    this.header = new HEADERSCALE(this,"header","contentContainer");
    this.projects = new PROJECTS();

    this.scrollAnimation();
};

WEBAPP.prototype.setUpRequestAnimationFrame = function(){
    var vendors = ['ms', 'moz', 'webkit', 'o', ''];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
};

WEBAPP.prototype.scrollAnimation = function(){
    var that=this;
    //if ie isnt old and
    if ((!oldieishere)&&(!that.isTouch)&&($(window).width()>1024)){

        //set elements up
        var multipleWorkItems = $('.workItem');
        for (var i=0;i<multipleWorkItems.length;i++){
            var $curItem = $(multipleWorkItems[i]);
            that.animationarray.push(new slideableelement($curItem,"bottom",{css:{scale:0,opacity:0}}));
        }

        //set scroll event up
        $(document).on("scroll",window,function(){
            animateElements();
        });
        //for initial load/refreshes
        animateElements();
    }

    function animateElements(){
        for (var i=0;i<that.animationarray.length;i++){
            that.animationarray[i].animate()
        }
    }

};

var PROJECTS = function(){
    this.projects = $('.workItem');

    this.projects.hover(function(){
        // in
        var $this = $(this);
        $this.addClass("hover");
        TweenMax.fromTo($this.find(".mask"),0.6,{opacity:0,display:'none'},{opacity:0.85,display:'block'});
        TweenMax.fromTo($this.find(".info"),0.6,{opacity:0,display:'none'},{opacity:1,display:'table-cell'});
    },function(){
        // out
        var $this = $(this);
        $this.removeClass("hover");
        TweenMax.to($this.find(".mask"),0.6,{opacity:0,display:'none'});
        TweenMax.to($this.find(".info"),0.6,{opacity:0,display:'none'});
    });

    this.projects.on("click",function(){
        var url = $(this).find("a").attr("href");
        if(window.open){window.open(url, '_blank');}else{window.location = url}
    })

};

var HEADERSCALE = function(parent,id,nextContainer){
    var that = this;

    this.parent = parent;
    this.elem = document.getElementById(id);
    this.nextContainer = document.getElementById(nextContainer);

    this.windowWidth;
    this.windowHeight;
    this.height;

    this.minMobileHeight = 300;
    this.minDesktopHeight = 500;

    //resize container
    this.resizeContainer();

    $(window).resize(function(){
        that.resizeContainer();
    });
};


HEADERSCALE.prototype.resizeContainer = function(){
    //get current width and height
    this.windowWidth = $(window).width();
    this.windowHeight = $(window).height();

    this.height = (this.windowWidth>550)    ?   this.windowHeight.limit(this.minDesktopHeight,1485)    :    this.windowHeight.limit(this.minMobileHeight,1485);

    //set width and height
    this.elem.style.width = this.windowWidth + "px";
    this.elem.style.height = this.height + "px";

    //offet container
    this.nextContainer.style.marginTop = this.height + "px"
};

var slideableelement = function(elem,wheretoanim,css,elemtrigger){
    this.elem = elem;
    this.elemtrigger = (typeof elemtrigger === "undefined") ? elem : elemtrigger;
    this.offsetTop = this.elemtrigger.offset().top;
    this.elemheight = this.elemtrigger.height();
    this.interval = null;
    this.timeout = null;
    this.previouspercentage = 0;
    this.percentage = 0;
    this.tl =new TimelineMax({smoothChildTiming:true});
    this.tl.staggerFrom(elem, 3, css , 1);
    this.tl.pause();
    this.speed = 0.02;
    this.wheretostartanimation = wheretoanim;
    this.wheretostartanimationnumber = 0;
};


slideableelement.prototype.animate = function(){
    var that = this,
        scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
        offsetstartpoint = 0,
        animationstart = 1,
        animationend =(that.elemtrigger.height());

    switch (that.wheretostartanimation)
    {
        case "top":
            that.wheretostartanimationnumber = scrollTop+(Math.floor($(window).height()/4));
            break;
        case "center":
            that.wheretostartanimationnumber = scrollTop+(Math.floor($(window).height()/2));
            offsetstartpoint=(that.elemtrigger.height()/2);
            animationstart=offsetstartpoint;
            break;
        case "bottom":
            that.wheretostartanimationnumber = scrollTop+(Math.floor($(window).height()/1.15));
            break;
    }



    if ($.browser.msie && $.browser.version == 10){
        that.percentage = that.wheretostartanimationnumber-(that.offsetTop-(that.elemtrigger.height()/2));
        that.percentage = (that.percentage.map(-animationstart,animationend,0,100)/100).limit(0,1);

        that.tl.progress(that.percentage);
    }else{
        that.percentage = that.wheretostartanimationnumber-(that.elemtrigger.offset().top+offsetstartpoint);
        that.percentage = (that.percentage.map(-animationstart,animationend,0,100)/100).limit(0,1);

        var time;
        var animationframe;



        function draw() {
            var now = new Date().getTime(),
                dt = now - (time || now);
            if (window.requestAnimationFrame){
                animationframe = requestAnimationFrame(draw);
            }else{
                window.clearTimeout(that.timeout);
                that.timeout=null;
                that.timeout = setTimeout(function(){
                    draw();
                },1);
            }
            time = now;

            // Drawing code goes here
            if (that.percentage>that.previouspercentage){
                that.previouspercentage = (that.previouspercentage+= 0.003 * dt).limit(0,that.percentage);
            }else{
                that.previouspercentage = (that.previouspercentage-= 0.003 * dt).limit(that.percentage,1);
            }

            that.tl.progress(that.previouspercentage);

            if (that.previouspercentage == that.percentage){

                if (window.requestAnimationFrame){
                    cancelAnimationFrame(animationframe)
                }else{
                    window.clearTimeout(that.timeout);
                    that.timeout=null;
                }
                that.previouspercentage = that.percentage;
            }

        }
        draw();

    }




};

slideableelement.prototype.endanimation = function(){
    this.elem.attr("style","")
};

Number.prototype.map = function (istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((this - istart) / (istop - istart));
};

Number.prototype.limit=function(min,max){
    return Math.min(max,Math.max(min,this));
};