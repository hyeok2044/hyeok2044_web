

//
var API_URL = 'https://osu.ppy.sh/api/v2';
var TOKEN_URL = 'https://osu.ppy.sh/oauth/token';
//

function get_token() {
	fetch("https://osu.ppy.sh/oauth/token", {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "redirect_uri": "https://hyeok2044.github.io/hyeok2044_web/",
        'client_id': 8204,
		'client_secret': 'GIk9GydcVWvQjuLr6ftECEsrCpQt9t7OLKcMjt6y',
		'grant_type': 'client_credentials',
		'scope': 'public'
    })
})
.then(response => {
	console.log(response);
    return response.json();
});
}

get_token();
//
//hw.addEventListener('click', function() {
//	get_token();
//	const url = new URL(
//		"https://osu.ppy.sh/api/v2/users/1/osu"
//	);
//
//	let params = {
//		"key": "est",
//	};
//	Object.keys(params)
//		.forEach(key => url.searchParams.append(key, params[key]));
//
//	let headers = {
//		"Content-Type": "application/json",
//		"Accept": "application/json",
//	};
//
//	fetch(url, {
//		method: "GET",
//		headers,
//	}).then(response => {
//		alert(JSON.stringify(response))
//	});
//}
//)
