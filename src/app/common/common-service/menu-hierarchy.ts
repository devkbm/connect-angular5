import { Program } from './Program';
import { Menu } from './menu';

export class MenuHierarchy {
    createdDt;
    createdBy;
    modifiedDt;
    modifiedBy;
    menuGroupCode: string;
    menuCode: string;
    menuName: string;
    parentMenuCode: string;
    sequence: number;
    level: number;
    program: Program;
    children: Menu[];
}
