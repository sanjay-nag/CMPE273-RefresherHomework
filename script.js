/* 
//Functions

//Legend: S - Sa, R - Ri, G - Ga, M - Ma, P - Pa, D - Da, N - Ni 
const MohanaRaga = 'S R2 G3 P D2 S';
const NatakaPriyaRaga = 'S R1 G2 M1 P D2 N2 S';
const ChalaNataRaga = 'S R3 G3 M1 P D3 N3 S';

const isShuddhaMadhyamaRaga = (raga) => {
	raga.includes('M1') ? console.log(`${raga} is a shuddha madhyama raga`) : console.log(`${raga} is NOT a shuddha madhyama raga`);
}

isShuddhaMadhyamaRaga(MohanaRaga);
isShuddhaMadhyamaRaga(NatakaPriyaRaga);
isShuddhaMadhyamaRaga(ChalaNataRaga);
*/




//Events

document.querySelector('.mouse-click').addEventListener('click', () => {
	document.getElementById('mouse-click-output').innerHTML = '<em>Mohana is a pentatonic scale in Carnatic Classical Music. It is one if the very popular scales. It is extensively used in cinema music as well. The Hindustani parallel to it is know as Raag Bhoop.</em>';
});

document.querySelector('.mouse-hover').addEventListener('mouseover', () => {
	document.getElementById('mouse-hover-output').innerHTML = '<em>Mohana is a heptatonic scale in Carnatic Classical Music. There are a lot of compositions in this scale. The Hindustani parallel to it is know as Raag Yaman.</em>';
});

document.querySelector('.mouse-hover').addEventListener('mouseout', ()  => {
	document.getElementById('mouse-hover-output').innerHTML = '';
});

document.querySelector('.key-copy').addEventListener('copy', ()  => {
	document.getElementById('key-copy-output').innerHTML = '<b>Plagiarism alert!!</b>';
});
