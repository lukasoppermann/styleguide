// flash detection
function detectflash()
{
	if (navigator.plugins != null && navigator.plugins.length > 0)
	{
		return navigator.plugins["Shockwave Flash"] && true;
	}
	if(~navigator.userAgent.toLowerCase().indexOf("webtv"))
	{
		return true;
	}
	if(~navigator.appVersion.indexOf("MSIE") && !~navigator.userAgent.indexOf("Opera"))
	{
		try{
			return new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && true;
		} catch(e){}
	}
	return false;
}
// clipboard copy
if( detectflash() )
{
	
}
// workaround with dialog
else
{

}
