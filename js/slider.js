/*
	author:likelight
	date:2013/12/26
	email:likelight3@gmail.com
*/
document.charset = "utf-8";
if(typeof getElementById != "function"){
	if(typeof(id) == "object"){
		return id;
	}
	if(document.getElementById(id)){
		return document.getElementById(id);
	}
	else {
		throw new Error(id+"argument error,can not find\""+id++ "\" element");
	}
}


var neverModules = window.neverModules || {};
neverModules.modules = neverModules.modules || {};


/*
	constructor
	input:cfg    used to set the attribute of a new slider
*/
neverModules.modules.slider = function (cfg) {
	if ((typeof cfg)!="object") 
	{
		cfg = {};  
	}

	this.targetId  = cfg.targetId;  /*the id of the slider*/
	this.hints     = cfg.hints?cfg.hints:"";  
	this.sliderCss = cfg.sliderCss?cfg.sliderCss:"";  /*the slider background classname of slider */
	this.barCss    = cfg.barCss?cfg.barCss:"";  /*the classname of the bar which can be moved*/
	this.boxCss    = cfg.boxCss?cfg.boxCss:""; /*the classname of box */
	this.min       = cfg.min?cfg.min:0;  /*the min value of the slider*/
	this.max       = cfg.max?cfg.max:100; /*the max value of the slider*/
	this.bBox      = cfg.bBox?cfg.bBox:false; /*the box flag it true the slider will show the box to show the value */
	this.step      = cfg.step?(cfg.step > 0?cfg.step:1) :1;
	this.parent    = cfg.parent?cfg.parent:window;  
	this.onstart   = function(){};
	this.onchange  = function(){};
	this.onend     = function(){};
  
	this._defaultInitializer.apply(this);  
}

neverModules.modules.slider.prototype = {

	_defaultInitializer: function () {
    this._bar     = null;
    this._slider  = null;
	this._box     = null;  
    this._wrapper = null;
    this._target  = this.parent.document.getElementById(this.targetId);
    if (this.min>this.max){var x=this.min;this.min=this.max;this.max=x;}
    this._value   = this.min;
  },
  //create Slider element 
   _createSlider: function () { with(this) {
    _wrapper = this.parent.document.createElement("DIV");
    //add element to html
    _target.appendChild(_wrapper);
    _wrapper.id = targetId + "_wrapper";
    _wrapper.style.position = "relative";

    _slider = this.parent.document.createElement("DIV");
    _wrapper.appendChild(_slider);
    _slider.id = targetId + "_slider";
    _slider.className = sliderCss;
    _slider.style.position  = "absolute";
	//create bar element
    createBar(); 
	// if bBox is true create the box
	if(bBox){
		createBox();
	} 

	var _self = this;
     _slider.onclick = function (evt) { _self._moveTo(evt);
      },
      // function to create bar
     createBar:function(){

     },
      // function to create box
     createBox:function(){

     },
}