import { bggXmlApiClient } from '../src/client';
import { getBggGeeklist } from '../src/wrappers/getBggGeeklist';
import {
  getBggCollection,
  getBggFamily,
  getBggForum,
  getBggForumlist,
  getBggGuild,
  getBggHot,
  getBggPlays,
  getBggSearch,
  getBggThing,
  getBggThread,
  getBggUser,
} from '../src/wrappers';

describe('bggXmlApiClient client', () => {
  it('gets geeklist with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await bggXmlApiClient('geeklist', { id: 272940, comments: 1 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).geeklist.title).toEqual('#36,5 Polski MatHandel (Polish Math Trade)');
  });
});

describe('bggXmlApiClient client wrappers', () => {
  it('gets geeklist with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggGeeklist({ id: 272940, comments: 1 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).geeklist.title).toEqual('#36,5 Polski MatHandel (Polish Math Trade)');
  });

  it('gets collection with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggCollection({ username: 'Qrzy88' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(parseInt((data as any).items.totalitems, 10)).toBeGreaterThan(200);
  });

  it('gets family with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggFamily({ id: 12210 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).items.item.name.value).toEqual('Mechanic: 4X');
  });

  it('gets forum with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggForum({ id: 19 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).forum.title).toEqual('General Gaming');
  });

  it('gets forumlist with given ID', async () => {
    jest.setTimeout(60000);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = await getBggForumlist({ id: 13, type: 'thing' } as any);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(Array.isArray((data as any).forums.forum)).toBe(true);
  });

  it('gets guild with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggGuild({ id: 1497 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).guild.name).toEqual('#boardgames');
  });

  it('gets hot', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggHot({ type: 'boardgame' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(Array.isArray((data as any).items.item)).toBe(true);
  });

  it('gets plays with given username', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggPlays({ username: 'Qrzy88' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).plays.username).toEqual('Qrzy88');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).plays.userid).toEqual('1381959');
  });

  it('gets search with given term', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggSearch({ query: 'alhambra' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(Array.isArray((data as any).items.item)).toBe(true);
  });

  it('gets thing with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggThing({ id: 6249 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).items.item.type).toEqual('boardgame');
  });

  it('gets thread with given ID', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggThread({ id: 2427564 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).thread.subject).toEqual('where to buy?');
  });

  it('gets user with given name', async () => {
    jest.setTimeout(60000);
    const { data } = await getBggUser({ name: 'Qrzy88' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((data as any).user.id).toEqual('1381959');
  });
});
