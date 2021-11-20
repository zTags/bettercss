import { build } from "./build.js";
import { help } from "./help.js";

function main(argv) {
	switch (argv[2]) {
		case "build":
		case "b":
			build(argv);
			break;
		case "help":
		case "h":
			help(argv);
			break;
		default:
			help(argv);
			break;
	}
}

main(process.argv);