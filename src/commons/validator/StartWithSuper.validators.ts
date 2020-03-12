import { IFormInputValidator } from "vdr-react-form-manager";

class StartWithSuperValidator implements IFormInputValidator {
	validate(value: any): string | null {
		if (!value.startsWith('SUPER')) {
			return 'Input must start with SUPER';
		}
		return null; //no error
	}
}

export const getStartWithSuperValidator = () => new StartWithSuperValidator();
