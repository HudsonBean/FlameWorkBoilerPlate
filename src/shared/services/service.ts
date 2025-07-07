// IMPORTS
import { Service, OnTick } from "@flamework/core";

// SERVICE
@Service()
export class MyService implements OnTick {
	onTick(dt: number) {
		print("My service is ticking", dt);
	}
}