import { MenuGroup } from '../../common/common-service/menu-group';
import { Authority } from './authority-info';

export class UserToken {
    token: string;
    authorities: Authority[];
    menuGroupList: MenuGroup[];
}
