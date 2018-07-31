import axios from 'axios';

const CREATE_QR_BASE = 'https://api.qrserver.com/v1/create-qr-code/';
const READ_QR_BASE = 'http://api.qrserver.com/v1/read-qr-code/';
const PROFILE_BASE = 'http://cedprod.corp.netapp.com:10080/search?';

async function createQR(username) {
	return await axios.get(`${CREATE_QR_BASE}?size=200*200&data=${username}`);
}

async function readQR(fileurl) {
	return await axios.get(`${READ_QR_BASE}?fileurl=${fileurl}`);
}

async function queryHTML(index = 26, username = wnatasha) {
	const url = `${PROFILE_BASE}index=${index}&userName=${username}`;
	const res = await axios.get(url);
	return res.data;
}
