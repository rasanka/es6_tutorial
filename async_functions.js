
async function () {
	var friends = await $.get("http://somesite.com/friends");
	console.log(friends);
}