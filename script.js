/**
* Determine the mobile operating system.
* This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
*
* @returns {String}
*/

function getMobileOperatingSystem()
{
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent))
  {
    return  "Windows Phone";
  }

  if (/android/i.test(userAgent))
  {
    return  "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
  {
    return  "iOS";
  }

  return  "unknown";
  // return “Android” - one should either handle the unknown or fallback to a specific platform, let’s say Android
}

alert(getMobileOperatingSystem());