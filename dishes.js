module.exports = {

	makePizza: function () {
		console.log('Making Pizza...');
		setTimeout(()=> {
			console.log('Pizza ready!');
		}, 2000);
	},

	makeFrenchFries: function () {
		console.log('Making French Fries...');
		setTimeout(()=> {
			console.log('French Fries ready!');
		}, 1500);
	},

	favDish: 'Gulab Jamun'
};