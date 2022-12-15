import { Content } from './content';

describe('Notification Content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma notificacao de amizade ');

    expect(content).toBeTruthy();
  });

  it('it should be able to create a notification content with less than 5 characteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('it should be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
