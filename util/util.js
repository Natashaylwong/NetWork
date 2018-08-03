import axios from 'axios';

const CREATE_QR_BASE = 'https://api.qrserver.com/v1/create-qr-code/';
const READ_QR_BASE = 'http://api.qrserver.com/v1/read-qr-code/';
const PROFILE_BASE = 'http://cedprod.corp.netapp.com:10080/search?';

function HTMLParser(rawHTML) {
	const pos = rawHTML.split('class="text12">');
	return {
		name: pos[2].split('<')[0],
		userName: pos[6].split('<')[0],
		cubicle: pos[8].split('<')[0],
		location: pos[10].split('<')[0],
		designation: pos[15].split('<')[0],
		address: pos[16].split('<')[0]
	};
}

async function createQR(username) {
	return await axios.get(`${CREATE_QR_BASE}?size=200*200&data=${username}`);
}

async function readQR(fileurl) {
	return await axios.get(`${READ_QR_BASE}?fileurl=${fileurl}`);
}

async function queryHTML(username = wnatasha) {
	const url = `${PROFILE_BASE}userName=${username}`;
	const rawHTML = await axios.get(url);
	return HTMLParser(rawHTML);
}
