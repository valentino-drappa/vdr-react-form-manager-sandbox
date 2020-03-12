import { IFormInputValidator } from "vdr-react-form-manager";

class EndWithTopValidator implements IFormInputValidator {
	validate(value: any): string | null {
		if (`${value}`.slice(-3) !== 'TOP') {
			return 'Input must end with TOP';
		}
		return null; //no error
	}
}

export const getEndWithTopValidator = () => new EndWithTopValidator();
