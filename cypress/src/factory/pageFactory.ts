import { PracticePage } from '../page/practicePage';

export class PageFactory {
  getPracticePage(testData: object) {
    try {
      return new PracticePage(testData);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
