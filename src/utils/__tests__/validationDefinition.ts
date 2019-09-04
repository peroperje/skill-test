import { email, password } from '../validationDefinition';
describe('validationDefinition', () => {
  describe('Email', () => {
    it('should be defined', () => {
      expect(email).toBeDefined();
    });

    it('should be valid', done => {
      email.isValid('petar@ptt.yu').then(value => {
        expect(value).toBe(true);
        done();
      });
    });

    it('should be invalid - email is empty', done => {
      email.isValid('').then(value => {
        expect(value).toBe(false);
        done();
      });
    });

    it('should has proper error message for empty email', done => {
      email.validate('').catch(({ message }) => {
        expect(message).toBe('Email is required');
        done();
      });
    });

    it('should be invalid - email is not valid', done => {
      email.isValid('petar@').then(value => {
        expect(value).toBe(false);
        done();
      });
    });

    it('should has proper error message for invalid email', done => {
      email.validate('petar@').catch(({ message }) => {
        expect(message).toBe('Email is not valid');
        done();
      });
    });
  });

  describe('Password', () => {
    it('should be defined', () => {
      expect(password).toBeDefined();
    });

    it('should be valid', done => {
      password.isValid('4565').then(value => {
        expect(value).toBe(true);
        done();
      });
    });

    it('should be invalid - password is empty', done => {
      password.isValid('').then(value => {
        expect(value).toBe(false);
        done();
      });
    });

    it('should has proper error message for empty password', done => {
      password.validate('').catch(({ message }) => {
        expect(message).toBe('Password is required');
        done();
      });
    });

    it('should be invalid - password length is less then 3', done => {
      password.isValid('').then(value => {
        expect(value).toBe(false);
        done();
      });
    });

    it('should has proper error message for min', done => {
      password.validate('4').catch(({ message }) => {
        expect(message).toBe('Min length is 3');
        done();
      });
    });

    it('should be invalid - password length is greater then 8', done => {
      password.isValid('1234567890874').then(value => {
        expect(value).toBe(false);
        done();
      });
    });

    it('should has proper error message for max', done => {
      password.validate('1234567890000').catch(({ message }) => {
        expect(message).toBe('Max length is 8');
        done();
      });
    });
  });
});
