import {LinkListInterface, linkLists} from '../models/LinkList';
import {loadLinkLists} from './LoadLinkLists';

export function LinkListById(id: string): LinkListInterface
{
    const item = loadLinkLists().find((i) => i.id === (id ?? 'default'));
    if (!item) {
        throw new Error('Item not found');
    }
    
    return item;
}