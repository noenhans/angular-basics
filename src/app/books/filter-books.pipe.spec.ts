import { FilterBooksPipe } from './filter-books.pipe';

describe('FilterBooksPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterBooksPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array, when no books', () => {
    const pipe = new FilterBooksPipe();
    const result = pipe.transform([], 'test');
    expect(result).toEqual([]);
  });

  it('should all books, when no searched value', () => {
    const pipe = new FilterBooksPipe();
    const books = [
      { name: 'first book', author: 'Jan Kowalski', isSoldOut: false },
      { name: 'second book', author: 'Marcin Nowaka', isSoldOut: false },
      { name: 'third book', author: 'Jan Kowalski', isSoldOut: false },
    ];

    const result = pipe.transform(books, '');

    expect(result).toBe(books);
  });

  it('should two books, when <<Kowalski>> searched', () => {
    const pipe = new FilterBooksPipe();
    const books = [
      { name: 'first book', author: 'Jan Kowalski', isSoldOut: false },
      { name: 'second book', author: 'Marcin Nowaka', isSoldOut: false },
      { name: 'third book', author: 'Jan Kowalski', isSoldOut: false },
    ];
    const expected = [books[0], books[2]];

    const result = pipe.transform(books, 'Kowalski');

    expect(result).toEqual(expected);
  });
});
