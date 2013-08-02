// JavaScript Document

var ImgObj = function( id, path ){
	this.id = id;
	this.path = path;
}

ImgObj.prototype.getId = function(){
	return this.id;
};
ImgObj.prototype.setId = function( id ){
	this.id = id;
};
ImgObj.prototype.getPath = function(){
	return this.path;
};
ImgObj.prototype.setPath = function( path ){
	this.path = path;
};


var ImgList = function( list ){
	this.index = 0;
	this.list = $.extend( true, [], list );
}

ImgList.prototype.getIndex = function(){
	return this.index;
};
ImgList.prototype.isIn = function( index ){
	return index >= 0 && index < this.list.length;
};
ImgList.prototype.setIndex = function( index ){
	if( this.isIn( index ) ){
		this.index = index;
	} else{
		index = false;
	}
	return index;
};
ImgList.prototype.getImgAtIndex = function( index ){
	if( this.isIn( index ) ){
		return this.list[index];
	} else{
		return null;
	}
};