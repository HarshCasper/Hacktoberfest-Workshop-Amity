var participants = JSON.parse(data)

const appendToBody = (participant) => {
	const body = document.getElementById("body")

	body.innerHTML += (
            `<div class="participant-list">
		<article>
		    <strong>${participant.name}</strong>
		    <p>${participant.desc}</p>
		    <a href=${participant.github}>Github</a>
		</article>
	    </div>`
	);
};

(() => {
	participants.forEach(appendToBody);
})()
