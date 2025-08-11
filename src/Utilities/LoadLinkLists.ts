import fs from 'fs';
import path from 'path';
import {LinkListInterface} from '../models/LinkList';

export function loadLinkLists(): LinkListInterface[]
{
    const dataDir = path.join(__dirname, '../data');
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));
    
    if (files.length === 0) {
        throw new Error('No JSON files found in the data directory');
    }
    
    return files.map(file => {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        return JSON.parse(content) as LinkListInterface;
    });
}
