import { ROOT_ROUTE, LOGIN_ROUTE } from '../routesDefinition';
describe('Routes definition', () => {
  describe('ROOT_ROUTE', () => {
    it('should be defined', () => {
      expect(ROOT_ROUTE).toBeDefined();
    });

    it('should has proper value', () => {
      expect(ROOT_ROUTE).toBe('/');
    });
  });
  describe('LOGIN_ROUTE', () => {
    it('should be defined', () => {
      expect(LOGIN_ROUTE).toBeDefined();
    });

    it('should has proper value', () => {
      expect(LOGIN_ROUTE).toBe('/login');
    });
  });
});
