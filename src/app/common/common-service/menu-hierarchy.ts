import { Program } from './Program';

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
    selected: boolean;
    expanded: boolean;
    children: MenuHierarchy[];
}
