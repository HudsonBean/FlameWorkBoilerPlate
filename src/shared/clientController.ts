// IMPORTS
import { Controller, OnRender } from "@flamework/core";

// CONTROLLER
@Controller()
export class MyController implements OnRender {
	onRender(dt: number) {
		print("My controller is rendering", dt);
	}
}