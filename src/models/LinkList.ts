import {loadLinkLists} from '../Utilities/LoadLinkLists';
import {LinkItemInterface} from './LinkItem';

export interface LinkListInterface {
    id: string,
    profileImage: string,
    name: string,
    description: string,
    color: string,
    banner: string
    backgroundColor: string,
    links: LinkItemInterface[]
}

export let linkLists: LinkListInterface[] = loadLinkLists();