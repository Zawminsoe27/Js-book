let c = document.cookie;

		function cookieData(cookieName, cookieValue, time) {
			let d = new Date();
			d.setTime(d.getTime() + time * 24 * 60 * 60 * 1000);
			let e = ";expires " + d.toUTCString();
			document.cookie = cookieName + "=" + cookieValue + e + "; path=/";
		}

		function rCookie(cookieName) {
			let cookieValue = false;
			let arr = document.cookie.split(";");
			arr.forEach((str) => {
				const cookie = str.split("=");
				if (cookie[0].trim() == cookieName) {
					cookieValue = cookie[1];
				}
			});
			return cookieValue;
		}

		function dCookie(cookieName) {
			cookieData(cookieName, "", -1);
		}