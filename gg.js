//¡ÀŒ  — ’œ
const keyBoxhp = document.getElementById('hp');
const keyBoxparm = document.getElementById('parm');
const keyBoxmarm = document.getElementById('marm');
const keyBoxuphp = document.getElementById('+hp');
const keyBoxupparm = document.getElementById('+parm');
const keyBoxupmarm = document.getElementById('+marm');
const keyBoxlowhp = document.getElementById('-hp');
const keyBoxlowparm = document.getElementById('-parm');
const keyBoxlowmarm = document.getElementById('-marm');


var hp = 0;
var uphp = 0;
var lowhp = 0;
var parm = 0;
var upparm = 0;
var lowparm = 0;
var marm = 0;
var upmarm = 0;
var lowmarm = 0;

function calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm) {

	peffhp = hp * (1 + 0.01 * parm);
	meffhp = hp * (1 + 0.01 * marm);
	effhp = (peffhp + meffhp) / 2;
	changesPeffhp = (hp + uphp - lowhp) * (1 + 0.01 * (parm + upparm - lowparm));
	changesMeffhp = (hp + uphp - lowhp) * (1 + 0.01 * (marm + upmarm - lowmarm));
	changesEffhp = (changesPeffhp + changesMeffhp) / 2;

	document.getElementById("peffhp").innerHTML = peffhp.toFixed(2);
	document.getElementById("meffhp").innerHTML = meffhp.toFixed(2);
	document.getElementById("effhp").innerHTML = effhp.toFixed(2);
	document.getElementById("changesPeffhp").innerHTML = changesPeffhp.toFixed(2);
	document.getElementById("changesMeffhp").innerHTML = changesMeffhp.toFixed(2);
	document.getElementById("changesEffhp").innerHTML = changesEffhp.toFixed(2);

}



function oninputhp(e) {
	
	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		hp = NaN;
	} else {
		eval('hp = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}
function oninputparm(e) {

	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		parm = NaN;
	} else {
		eval('parm = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}
function oninputmarm(e) {

	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		marm = NaN;
	} else {
		eval('marm = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}
function oninputuphp(e) {

	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		uphp = NaN;
	} else {
		eval('uphp = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}
function oninputupparm(e) {

	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		upparm = NaN;
	} else {
		eval('upparm = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}
function oninputupmarm(e) {

	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		upmarm = NaN;
	} else {
		eval('upmarm = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}
function oninputlowhp(e) {

	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		lowhp = NaN;
	} else {
		eval('lowhp = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}
function oninputlowparm(e) {

	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		lowparm = NaN;
	} else {
		eval('lowparm = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}
function oninputlowmarm(e) {

	prov = e.target.value;
	if (prov.trim().match(/[^0-9\.\*\/+\-\(\)%&~]/)) {
		lowmarm = NaN;
	} else {
		eval('lowmarm = ' + prov + ';')
	}

	calc(hp, parm, marm, uphp, upparm, upmarm, lowhp, lowparm, lowmarm);
}



keyBoxhp.addEventListener("input", oninputhp);
keyBoxparm.addEventListener("input", oninputparm);
keyBoxmarm.addEventListener("input", oninputmarm);
keyBoxuphp.addEventListener("input", oninputuphp);
keyBoxupparm.addEventListener("input", oninputupparm);
keyBoxupmarm.addEventListener("input", oninputupmarm);
keyBoxlowhp.addEventListener("input", oninputlowhp);
keyBoxlowparm.addEventListener("input", oninputlowparm);
keyBoxlowmarm.addEventListener("input", oninputlowmarm);
//-----------------------------------------------
//¡ÀŒ  — ’»ÀŒÃ
