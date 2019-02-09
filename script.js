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