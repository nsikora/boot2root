const fs = require('fs');
const exec = require('child_process').exec;

let code = {}
if (process.argv.length < 3) {
	console.error('Please add folder !!');
} else if (process.argv.length > 3) {
	console.error('You have too munch arg !!');
} else {
	const folder = process.argv[2];
	const st = fs.statSync(folder);
	if (!st.isDirectory()) {
		console.error('Please add a DIRECTORY no a file !!');
	} else {
		const files = fs.readdirSync(folder);
		files.map(f => {
			const file = `${folder}/${f}`;
			const content = fs.readFileSync(file, 'utf8');
			const number = content.split('//file')[1];
			code[number] = content;
		});
		code.text = "";
		for (let i = 1; i < files.length + 1; i++) {
			code.text += `${code[i]}\n`;
		}
		fs.writeFileSync('crack.c', code.text, 'utf-8');
		console.log('Concrats ! you have the password !');
		console.log('Now you can exec ./crack');
		exec('gcc crack.c -o crack');
	}
}
